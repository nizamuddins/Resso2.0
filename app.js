const express = require('express');
const bodyParser = require("body-parser");
// const { get } = require('http');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine","ejs")

// get
app.get('/', (req, res) => res.sendFile(__dirname +"/index.html"));
app.get('/YourFm',(req,res)=>{res.render("yourfm")})
app.get('/ForYou',(req,res)=>{res.render("foryou")})
app.get('/Browse',(req,res)=>{res.render("browse")})

// post
app.post("/browse",(req,res)=>{
let songname = req.body.songName;
console.log(songname)
 res.render("post",{name:songname})   

})

app.listen(4000, () => console.log(`Example app listening on port 4000`));