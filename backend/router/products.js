require("../db/conn");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const multer = require("multer");
const Products = require("../model/ProductsSchema");
// const uuid = require("uuid");

// const DIR = "../public/";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname.toLowerCase().split(" ").join("-");
//     cb(null, uuid.v4() + "-" + fileName);
//   },
// });

// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//     }
//   },
// });

const upload = multer({ dest: "uploads/" });

function generateUniqueId() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const uniqueId = `${year}${month}${day}${hours}${minutes}${seconds}`;

  return uniqueId;
}

// Post
router.post(
  "/addProduct",
  upload.array("productMainImage"),
  // upload.single("productImage2"),
  // upload.single("productImage3"),
  // upload.single("productImage4"),
  // upload.single("productImage5"),
  async (req, res) => {
    // const url = req.protocol + "://" + req.get("host");
    const {
      productTitle,
      productCode,
      productAvailability,
      productWeight,
      productPrice,
      productQuantity,
      productShortDescription,
      productCurrency,
      productCategory,
      productStatusNewProduct,
      productStatusBestSeller,
      productStatusSkinCareProduct,
      productIngredients,
      productHowToUse,
      productMainImage,
      // productImage2,
      // productImage3,
      // productImage4,
      // productImage5,
      productBenefits,
      // productReviews,
    } = req.body;

    if (
      //   productTitle ||
      //   productCode ||
      //   productAvailability ||
      //   productWeight ||
      //   productPrice ||
      //   productQuantity ||
      //   productShortDescription ||
      //   productCurrency ||
      //   productCategory ||
      //   productStatusNewProduct ||
      //   productStatusBestSeller ||
      //   productStatusSkinCareProduct ||
      //   productIngredients ||
      //   productHowToUse ||
      //   productMainImage ||
      //   productImage2 ||
      //   productImage3 ||
      //   productImage4 ||
      //   productImage5 ||
      //   productBenefits
      1 === 0
    ) {
      return res.status(422).json({
        error: "Please fill the fields properly",
      });
    }

    try {
      const productExist = await Products.findOne({ productCode: productCode });
      console.log(productExist);
      if (productExist) {
        return res.status(422).json({ error: "Product already exists" });
      }
      const product = new Products({
        productTitle,
        productCode: "prod" + generateUniqueId(),
        productAvailability,
        productWeight,
        productPrice,
        productQuantity,
        productShortDescription,
        productCurrency,
        productCategory,
        productStatusNewProduct,
        productStatusBestSeller,
        productStatusSkinCareProduct,
        productIngredients,
        productHowToUse,
        productMainImage,
        // productImage2,
        // productImage3,
        // productImage4,
        // productImage5,
        productBenefits,
        // productReviews,
      });
      await product.save();
      res.status(201).json({
        message: "product added successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Get
router.get("/getProducts", async (req, res) => {
  console.log("this is about page");
  const products = await Products.find();
  res.send(products);
});

module.exports = router;
