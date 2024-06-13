const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const { productmodel } = require("./modules/product")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://abytomy:Aby2905@cluster0.zupck9h.mongodb.net/ProductDB?retryWrites=true&w=majority&appName=Cluster0")





app.post("/Add",(req,res) => {
   let input = req.body
    let product = new productmodel(input)
    product.save()
    console.log(product)
    res.json({ "Status": "Success" })
})

app.get("/View", (req, res) => {
    productmodel.find().then(
        (data) => {
            res.json(data)
        }

    ).catch(
        (error) => {
            res.json(error)
        }

    )

})



app.post("/Search", (req, res) => {
    let input = req.body
    productmodel.find(input).then(
        (data) => {
            res.json(data)
        }

    ).catch(
        (error) => {
            res.json(error)
        }

    )

})

app.post("/Delete", (req, res) => {
    let input = req.body
    productmodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({"status":"success"})
        }
        

    ).catch(
        (error) => {
            res.json(error)
        }

    )

})

app.listen(8070,()=>{
    console.log("Server started")
})

