const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      // required: true,
    },
    productCode: {
      type: String,
      // required: true,
    },
    productAvailability: {
      type: String,
      // required: true,
    },
    productWeight: {
      type: String,
      // required: true,
    },
    productPrice: {
      type: Number,
      // required: true,
    },
    productQuantity: {
      type: Number,
      // required: true,
    },
    productShortDescription: {
      type: String,
      // required: true,
    },
    productCurrency: {
      type: String,
      // required: true,
    },
    productCategory: {
      type: String,
      // required: true,
    },
    productStatusNewProduct: {
      type: Boolean,
    },
    productStatusBestSeller: {
      type: Boolean,
    },
    productStatusSkinCareProduct: {
      type: Boolean,
    },
    productIngredients: {
      type: String,
      // required: true,
    },
    productHowToUse: {
      type: String,
      // required: true,
    },
    productMainImage: {
      type: Array,
      // required: true,
    },
    // productImage2: {
    //   type: Array,
    //   // required: true,
    // },
    // productImage3: {
    //   type: Array,
    //   // required: true,
    // },
    // productImage4: {
    //   type: Array,
    //   // required: true,
    // },
    // productImage5: {
    //   type: Array,
    //   // required: true,
    // },
    productBenefits: {
      type: Array,
    },
    // productReviews: [
    //   {
    //     name: {
    //       type: String,
    //     },
    //     rating: {
    //       type: Number,
    //     },
    //     message: {
    //       type: String,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;
