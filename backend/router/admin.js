require("../db/conn");
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../db/conn");
const Admin = require("../model/AdminSchema");
const Authenticates = require("../middleware/authenticateAdmin");

const Cart =require('../model/CartSchema');
function generateUniqueId() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const uniqueId = `${year}${month}${day}${hours}${minutes}${seconds}`;

  return uniqueId;
}

// admin add
router.post("/AdminRegister", async (req, res) => {
  const {
    name,
    email,
    contact,
    password,
    confirmPassword,
    city,
    postalCode,
    address,
    gender,
  } = req.body;

  if (
    !name ||
    !email ||
    !contact ||
    !password ||
    !confirmPassword ||
    !city ||
    !postalCode ||
    !address ||
    !gender
  ) {
    return res.status(422).json({
      error: "Please fill the fields properly",
    });
  }

  try {
    const AdminExist = await Admin.findOne({
      email: email,
    });
    console.log(AdminExist);
    if (AdminExist) {
      return res.status(422).json({
        error: "Email already exists",
      });
    }
    const Admin2 = new Admin({
      name,
      email,
      contact,
      password,
      confirmPassword,
      city,
      postalCode,
      address,
      gender,
    });
    const cart=new Cart({
      products:[],
customer_id:email,
customer_email:email ,
CartId:'cart'+generateUniqueId(),
      CartDate:new Date()});
    await cart.save();

    await Admin2.save();
    res.status(201).json({
      message: "Admin register successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});
//admin login
router.post('/adminSignin',async (req,res)=>{

  try{
    
let token;
  const {email,password}=req.body;
  if(!email||!password){
    return res.status(400).json({error:'plz filled the data'});

  }

  const AdminLogin=await Admin.findOne({email:email});

  if(AdminLogin){
    const isMatch= await bcrypt.compare(password,
      AdminLogin.password);
      token=await AdminLogin.generateAuthToken();

      res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+2589000000),
        // httpOnly:true
      })
      if(!isMatch){
        res.status(400).json({error:'invalid credentials'});
      }
      else{
        res.json({message:'Admin Signin successfully'});
      }

  }
else{
res.status(400).json({
  error:'invalid Credentials'
});
}

}
catch(err){
console.log(err);

res.status(500).json({ error: 'Internal server error' });
}

})

//get admin data
router.get("/getAdminData", async (req, res) => {
  console.log("this is about page");
  const Admins = await Admin.find();
  res.send(Admins);
});


router.get('/admin',Authenticates,(req,res)=>{
  console.log("this is about page")
      res.send(req.rootUser);
  })
// Delete
router.delete("/deleteAdmin/:AdminId", async (req, res) => {
  console.log("Delete Admin");
  const AdminId = req.params._id;
  //   const updates = req.body;
  try {
    const deletedAdmin = await Admin.findOneAndDelete({
      AdminId: AdminId,
    });
    if (!deletedAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update
router.put("/AdminUpdate/:AdminId", async (req, res) => {
  const AdminId = req.params._id;
  const updates = req.body;

  try {
    const result = await Admin.updateOne({ AdminId: AdminId }, { $set: updates });

    if (result.n === 0) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(200).json({ message: "Admin updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/adminlogout", (req, res) => {
  console.log("this is logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("Admin logout");
});

module.exports = router;
