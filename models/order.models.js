import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    
    quantity: {
        type: Number,
        required: true
    }
});
const orderschema = new mongoose.Schema({
    orderprice:{
        type: Number,
        required : true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderitems: {
        type: [orderItemSchema],
        required: true
    }
}, { timestamps: true });
export const Order = mongoose.model("Order", orderschema);