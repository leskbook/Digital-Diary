const db=require("../models");

exports.createMemories=(req,res)=>{
    console.log(req.body)
db.Memories.create({
    description:req.body.description,
    title:req.body.title,
    imageurl:req.body.imageurl
})
.then((data)=>res.send(data))
.catch((err)=>{console.log(err)})
}

exports.getMemories=(req,res)=>{
db.memories.findAll({})
.then((data)=>{console.log(data);res.json(data)})
.catch((err)=>{console.log(err)})
}

