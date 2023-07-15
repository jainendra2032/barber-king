import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const ShopModel = mongoose.model("Shop",ShopSchema);

export default ShopModel;

