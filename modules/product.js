const mongoose=require("mongoose")
const Schema=mongoose.Schema(
    {
        "pdt_name":String,
        "pdt_code":String,
        "pdt_price":String,
        "Category":String

    }
)

let productmodel=mongoose.model("product",Schema);
module.exports={productmodel}