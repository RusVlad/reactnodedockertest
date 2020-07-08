import mongoose from "mongoose";

const PropertiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 1,
  },
  description: String,
  sold_price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "USD",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: Array,
    contentType: String,
    required: false,
  },
  location: {
    type: Object,
    required: true
  }
});

export default mongoose.model("Properties", PropertiesSchema);
