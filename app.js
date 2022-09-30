const express = require('express');
const bodyParser = require("body-parser");
const https = require('https');
const {response} = require('express');

const app = express();

let array = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set("view engine", "ejs")

// get
app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));
app.get('/YourFm',(req,res)=>{setTimeout(()=>{res.render("yourfm")},2000);})
// app.get('/ForYou',(req,res)=>{setTimeout(()=>{res.render("foryou")},2000);})
app.get('/Browse',(req,res)=>{setTimeout(()=>{res.render("browse",{name:"Tu Jaane Na",name2:"Atif Aslam - Ajab Prem Ki Gazab Kahani",name3:"images/tujaanena.jpg",names:"songs/tujaanena.mp3"})},2000);})  
// post 
// app.post("/browse",(req,res)=>{
// const request = req.body.songName;   let music3 = request.split(" ");   let
// music4 = music3.join("");   let music2 = music4.toLowerCase();   let src =
// "songs/"+music2+".mp3"    if(request != ""){      array = [];
// array.push(request);      res.render("post",{name:request,name2:src}); }else{
// res.render("post",{name:array[0]});    }   }) app.post("/song",(req,res)=>{
// const request = req.body.songName; let music3 = request.split(" "); let
// music4 = music3.join(""); let music2 = music4.toLowerCase(); let src =
// "songs/"+music2+".mp3"  if(request != ""){ array = []; array.push(request);
// res.render("post",{name:request,name2:src});  }else{
// res.render("post",{name:array[0]});  } }) const axios = require('axios');
// axios({     method: 'get',     url:
// 'https://v1.nocodeapi.com/itsnizam/spotify/dTbMlsFAKejWKQJd/search?q=kesariya&type=track',
// params: {}, }).then(function (response) {          handle success
// console.log(response.data); }).catch(function (error) {          handle error
// console.log(error); })

app.post("/song", (req, res) => {
    const query = req.body.songName;
    let type = 'track';
    const url = `https://v1.nocodeapi.com/itsnizam/spotify/dTbMlsFAKejWKQJd/search?q=${query}&type=${type}&perPage=2&page=0`;
    https.get(url, (response) => {
        response.on("data", (data) => {
            const data1 = JSON.parse(data);
            // let name0 = data1.tracks.items[0].album.name;
            let name3 = data1.tracks.items[0].name;
            let lengths = data1.tracks.items[0].artists.length;
            let img = data1.tracks.items[0].album.images[2].url;
            let singers = " ";

            for (let i = 0; i < lengths; i++) {
                let name2 = data1.tracks.items[0].artists[i].name;
                singers += name2;
                if (i < lengths - 1) {
                    singers += ", "
                }
                if (i === lengths - 1) {
                    singers += "."
                }
            }
            // song
            let songname = name3.split(" ");
            let joinName = songname.join("");
            let lower = joinName.toLowerCase();
            let src = "songs/"+lower+".mp3"
            res.render("browse", {name: name3,name2: singers,name3: img,names:src});
        })
    })
})

app.listen(4000, () => console.log(`Example app listening on port 4000`));
