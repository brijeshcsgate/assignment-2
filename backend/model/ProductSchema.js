const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  // ProductTitle:{
  // type:String,
  // //required:true
  // },
  // ProductImage:{
  //     type:[String],
  //     //required:true
  // },
  // ProductLink:{
  //     type:String,
  //     //required:true
  // },

  productTitle: {
    type: String,
    //required:true
  },
  productCode: {
    type: String,
    //required:true
  },
  productQuantity: {
    type: Number,
    //required:true
  },
  productPrice: {
    type: Number,
    //required:true
  },
  productWeight: {
    type: String,
    //required:true
  },
  productShortDescription: {
    type: String,
    //required:true
  },
  productAvailability: {
    type: String,
    //required:true
  },
  productCurrency: {
    type: String,
    //required:true
  },
  productCategory: {
    type: String,
    //required:true
  },
  productStatusNewProduct: {
    type: Boolean,
    //required:true
  },
  productStatusBestSeller: {
    type: Boolean,
    //required:true
  },
  productStatusSkinCareProduct: {
    type: Boolean,
    //required:true
  },
  productIngredients: {
    type: String,
    //required:true
  },
  productHowToUse: {
    type: String,
    //required:true
  },
  productMainImage: {
    type: [String],
    // type:String,
    //required:true
  },
  // productImage1: {
  //   type: [String],
  //   // type:String,
  //   //required:true
  // },
  // productImage2: {
  //   type: [String],
  //   // type:String,
  //   //required:true
  // },
  // productImage3: {
  //   type: [String],
  //   // type:String,
  //   //required:true
  // },
  // productImage4: {
  //   type: [String],
  //   // type:String,
  //   //required:true
  // },
  // productImage5: {
  //   type: [String],
  //   // type:String,
  //   //required:true
  // },
  productBenefits1: {
    type: String,
    //required:true
  },
  productBenefits2: {
    type: String,
    //required:true
  },
  productBenefits3: {
    type: String,
    //required:true
  },
  productBenefits4: {
    type: String,
    //required:true
  },
  productBenefits5: {
    type: String,
    //required:true
  },
  ProductId: {
    type: String,
    //required:true
  },
  ProductDate: {
    type: Date,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;


// const jwt=require('jsonwebtoken');
// const mongoose=require('mongoose');
// const ProductSchema= new mongoose.Schema({

// // ProductTitle:{
// // type:String,
// // //required:true
// // },
// // ProductImage:{
// //     type:[String],
// //     //required:true
// // },
// // ProductLink:{
// //     type:String,
// //     //required:true
// // },


// productTitle:{
//     type:String,
//     //required:true
// },
// productCode:{
//     type:String,
//     //required:true
// },
// productQuantity:{
//     type:Number,
//     //required:true
// },
// productPrice:{
//     type:Number,
//     //required:true
// },
// productWeight:{
//     type:Number,
//     //required:true
// },
// productShortDescription:{
//     type:String,
//     //required:true
// },
// productAvailability:{
//     type:String,
//     //required:true
// },
// productCurrency:{
//     type:String,
//     //required:true
// },
// productCategory:{
//     type:String,
//     //required:true
// },
// productStatusNewProduct:{
//     type:String,
//     //required:true
// },
// productStatusBestSeller:{
//     type:String,
//     //required:true
// },
// productStatusSkinCareProduct:{
//     type:String,
//     //required:true
// },
// productIngredients:{
//     type:String,
//     //required:true
// },
// productHowToUse:{
//     type:String,
//     //required:true
// },
// productMainImage:{
//     type:[String],
//     // type:String,
//     //required:true
// },
// productBenefits:{
//     type:String,
//     //required:true
// },
// ProductId:{
//     type:String,
//     //required:true
// },
// ProductDate:{
//     type: Date,
    

// },

// });


// const Product=mongoose.model('Product',ProductSchema);
// module.exports=Product;
