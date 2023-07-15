import express from 'express';
import mongoose from 'mongoose';
import ShopModel from './models/ShopModel.js';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.json("APi is working");
})

app.post("/createShop",async(req,res)=>{
    try {
        const data = req.body;
        const shopmodel = ShopModel(data);
        const savedShop = await shopmodel.save();
        res.status(200).json(savedShop);
    } catch (error) {
        res.status(404).json("Somting is wrong");
    }
})

app.get("/getAllShops",async(req,res)=>{
    try {
        const data = await ShopModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json("Something is wrong");
    }
})


mongoose.connect('mongodb+srv://admin:admin123@cluster0.4gfnvky.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log("Database is connected");
        console.log("Server is runing fine");
    })
}).catch((error)=>{
    console.log(error);
})

