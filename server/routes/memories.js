const controller=require("../controllers/memories");
const express =require('express');

const Router=express.Router();
Router.post("/create",controller.createMemories);
Router.get("/",controller.getMemories);  

module.exports=Router;