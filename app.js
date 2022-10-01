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
app.get('/Browse',(req,res)=>{setTimeout(()=>{res.render("browse",{browse:"Browse",name:"Tu Jaane Na",name2:"Atif Aslam - Ajab Prem Ki Gazab Kahani",name3:"images/tujaanena.jpg",names:"songs/tujaanena.mp3"})},2000);})  
// post 

app.post("/song", (req, res) => {
    const query = req.body.songName;
    let type = 'track';
    const url = `https://v1.nocodeapi.com/nizam/spotify/CRobmWArUTMzModv/search?q=${query}&type=${type}&perPage=2&page=0`;
    https.get(url, (response) => {
        response.on("data", (data) => {
            const data1 = JSON.parse(data);
            let name0 = data1.tracks.items[0].album.name;
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
            var new_string = lower.split('"');
            let joinName2 = new_string.join("");
            let hyphensRemoved = joinName2.replaceAll('-', '')
            let src = "songs/"+hyphensRemoved+".mp3";
            if(array.length>0){
                let flag =0;
                for(let i=0;i<1;i++){
                    for(j=0;j<array.length;j++){
                        if(array[j].songnaam === name3){
                            flag =1;
                            break;

                        }
                    }
                   if(flag === 0){
                    let obj ={
                        src1:src,
                        songnaam:name3,
                        singername:singers,                       
                        imag:img
                    };
                    array.unshift(obj);
                   }
                  
                }
            }else{
                let obj ={
                    src1:src,
                    songnaam:name3,
                    singername:singers,                       
                    imag:img
                };
                array.push(obj);
            }
            res.render("browse", {browse:name0,name: name3,name2: singers,name3: img,names:src});
        })
    })
})

// ________
app.get("/history",(req,res)=>{
    let array2 = [
    
    ]
if(array.length === 0){
    res.render("history",{array1:array2})
}else{
    res.render("post",{array1:array})

}
})



app.listen(4000, () => console.log(`Example app listening on port 4000`));
