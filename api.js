const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))







// find


// // // update

app.put("/:name",async (req,res)=>{
    let data1 = await data()
    let data2 = await data1.updateOne({name:req.params.name},{$set:req.body})
    res.send(data2)

})

// // delete
app.delete("/:id",async (req,res)=>{
    let data1 = await data();
    // let data2 = await data1.deleteOne(req.body)
    let data2 = await data1.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send({result:"deleted"})
    // console.log(req.params.id)
})


app.listen(5000,()=>{
    console.log("started");
})

