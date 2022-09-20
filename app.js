const express = require('express');
const bodyParser = require("body-parser");
const app = express();
let array = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine","ejs")

// get
app.get('/', (req, res) => res.sendFile(__dirname +"/index.html"));
app.get('/YourFm',(req,res)=>{setTimeout(()=>{res.render("yourfm")},2000);})
app.get('/ForYou',(req,res)=>{setTimeout(()=>{res.render("foryou")},2000);})
app.get('/Browse',(req,res)=>{setTimeout(()=>{res.render("browse",{name:"Tu Jaane Na",name2:"tujaanena"})},2000);})




// post

app.post("/browse",(req,res)=>{
  const request = req.body.songName;
  let music3 = request.split(" ");
  let music4 = music3.join("");
  let music2 = music4.toLowerCase();
  let src = "songs/"+music2+".mp3"
   if(request != ""){
     array = [];
     array.push(request);     
     res.render("post",{name:request,name2:src});
     
   }else{
      res.render("post",{name:array[0]});
   }
  
  })
  




app.post("/song",(req,res)=>{
const request = req.body.songName;
let music3 = request.split(" ");
let music4 = music3.join("");
let music2 = music4.toLowerCase();
let src = "songs/"+music2+".mp3"
 if(request != ""){
   array = [];
   array.push(request);     
   res.render("post",{name:request,name2:src});
   
 }else{
    res.render("post",{name:array[0]});
 }

})

app.listen(4000, () => console.log(`Example app listening on port 4000`));
