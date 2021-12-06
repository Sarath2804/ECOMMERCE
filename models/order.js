const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    order_id: { type: Number, required: true, unique:true ,index:true},
    item_name : {type:String, required:true},
    cost: { type: Number, required: true },
    order_date: { type: Date, required: true },
    delivery_date: { type: Date, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
