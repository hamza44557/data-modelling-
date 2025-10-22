import mongoose from "mongoose";
import { Category } from "./category.models";
const productSchema = new mongoose.Schema({
    description:{
        type : String,
        required : true
    },
    name :{
        type : String,
        required: true
    },
    productImage:{
        type:String

    },
    price:{
        type: Number,
        default : 0
    },
    stock:{
        dault: 0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
    }
},{timestamps: true})
export const Product = mongoose.model("Product",productSchema)