require("../db/conn");
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../db/conn");
const User = require("../model/UserSchema");
// const Authenticate = require("../middleware/authenticate");
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


router.post("/userRegister", async (req, res) => {
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
    const userExist = await User.findOne({
      email: email,
    });
    console.log(userExist);
    if (userExist) {
      return res.status(422).json({
        error: "Email already exists",
      });
    }
    const user2 = new User({
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

    await user2.save();
    res.status(201).json({
      message: "User register successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});
router.post('/signin',async (req,res)=>{

  try{
    
let token;
  const {email,password}=req.body;
  if(!email||!password){
    return res.status(400).json({error:'plz filled the data'});

  }

  const userLogin=await User.findOne({email:email});

  if(userLogin){
    const isMatch= await bcrypt.compare(password,
      userLogin.password);
      token=await userLogin.generateAuthToken();

      res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+2589000000),
        // httpOnly:true
      })
      if(!isMatch){
        res.status(400).json({error:'invalid credentials'});
      }
      else{
        res.json({message:'user Signin successfully'});
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
router.get("/getUserData", async (req, res) => {
  console.log("this is about page");
  const users = await User.find();
  res.send(users);
});

// Delete
router.delete("/deleteUser/:userId", async (req, res) => {
  console.log("Delete User");
  const userId = req.params._id;
  //   const updates = req.body;
  try {
    const deletedUser = await User.findOneAndDelete({
      userId: userId,
    });
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update
router.put("/userUpdate/:userId", async (req, res) => {
  const userId = req.params._id;
  const updates = req.body;

  try {
    const result = await User.updateOne({ userId: userId }, { $set: updates });

    if (result.n === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/logout", (req, res) => {
  console.log("this is logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});

module.exports = router;
