const express = require('express');
const bodyParser = require("body-parser");
// const { get } = require('http');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine","ejs")

// get
app.get('/', (req, res) => res.sendFile(__dirname +"/index.html"));
app.get('/YourFm',(req,res)=>{setTimeout(()=>{res.render("yourfm")},2000);})
app.get('/ForYou',(req,res)=>{setTimeout(()=>{res.render("foryou")},2000);})
app.get('/Browse',(req,res)=>{setTimeout(()=>{res.render("browse")},2000);})

// post
// app.post("/browse",(req,res)=>{
// let songname = req.body.songName;
// console.log(songname)
// setTimeout(()=>{
//     res.render("post",{name:songname})   

// },2000)

// })

app.listen(4000, () => console.log(`Example app listening on port 4000`));