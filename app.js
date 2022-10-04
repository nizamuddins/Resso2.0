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
app.get('/YourFm', (req, res) => {
    setTimeout(() => {
        res.render("yourfm")
    }, 2000);
})
app.get('/Browse', (req, res) => {
    setTimeout(() => {
        if (array.length === 0) {
            res.render("browse", {
                browse: "Browse",
                name:"Tu Jaane Na",
                name2: "Atif Aslam - Ajab Prem Ki Gazab Kahani",
                name3: "images/tujaanena.jpg",
                names: "songs/tujaanena.mp3"
            })
        } else {
            res.render("browse", {
                browse: array[0].browse1,
                name: array[0].songnaam,
                name2: array[0].singername,
                name3: array[0].imag,
                names: array[0].src1,
            })
        }

    }, 2000);
})
// post

app.post("/song", (req, res) => {
    const query = req.body.songName;
    var availableTags = ["Aila Re Aillaa",'Suno Chanda - Original Soundtrack','Suno Chanda Season 2',"Aayi Aayi Bhoot Police","Aaye Haaye","Tu Aake Dekhle","Abhi Toh Party Shuru Hui Hai","Awara","Ankhiyon Se Goli Maare","Ae Dil Hai Mushkil","Aadat","Aira Gaira","Agar Tu Hota","Abhi Mujh Mein Kahin","Ae Khuda","Allah Duhai Hai ","Aankh Marey","Apna Time Aayega",'Akdi Pakdi (From "Liger")',"Bolna","Bad Boy(From Saaho)","Bom Diggy Diggy","Bulleya","Bhar Do Jholi Meri","Bhula Dena","Baaton Ko Teri","Baadshah O Baadshah","Boss (Title Song)","Be Intehaan",'Bol Bol Bol - Jhankar','Bhool Bhulaiyaa 2 Title Track (From "Bhool Bhulaiyaa 2")',"Bande Hain Hum",'Coka 2.0 (From "Liger")','Chaiyaan Mein Saiyaan Ki','Chhora Ganwar','Deva Deva (From "Brahmastra")','Dil (From "Ek Villain Returns")','Dil (Shreya’s Version) [From "Ek Villain Returns"]','Fitoor','Galliyan Returns (From "Ek Villain Returns")','I Love My India',"Jhoom (R&B MIX)",'Kesariya (From "Brahmastra")','La Ilaaj','Nain Ta Heere (From "Jugjugg Jeeyo")','Raksha Bandhan - Reprise','Rangisari (From "Jugjugg Jeeyo")','Rubaru','Paracetamol',"Roke Na Ruke Naina",'Shaamat (From "Ek Villain Returns")','Something in the Orange','Tum Pyaar Ho','Tere Saath Hoon Main (From "Raksha Bandhan")','Tur Kalleyan (From "Laal Singh Chaddha")',"Zara Sa (Lofi Flip)",'Naacho Naacho (From "Rrr")','Jeeye To Jeeye Kaise - From "Saajan- Hindi"','Tujh Mein Rab Dikhta Hai','Kusu Kusu (From "Satyameva Jayate 2")','Raataan Lambiyan (From "Shershaah")','Srivalli (From "Pushpa The Rise Part - 01")','Baarish Ban Jaana','Lut Gaye','Maiyya Mainu','Khairiyat','Khal Nayak Hoon Main','Tujhe Dekha To','Gali Gali (From "Kgf Chapter 1")','Vaaste','Mehabooba','O Saki Saki (From "Batla House")','Dil Galti Kar Baitha Hai','Hookah Bar','Tum Hi Aana (From "Marjaavaan")','Humnava Mere','Thoda Thoda Pyaar','Lungi Dance (From "Lungi Dance")','Muqabla (From "Street Dancer 3D")',"Bachpan Ka Pyaar",'Jugnu','Filhaal2 Mohabbat','Jeene Laga Hoon','Samjhawan','Sunn Raha Hai (From "Aashiqui 2")','Dil Tod Ke','Mann Bharryaa 2.0 (From "Shershaah")','Dil Meri Na Sune','Rait Zara Si','Ranjha (From "Shershaah")','Prem Ratan Dhan Payo','Teri Mitti','Sanam Re','O Re Piya','Kabira','Kaun Tujhe (From "M.S.Dhoni - The Untold Story")','Dilbar (From "Satyameva Jayate")','Afghan Jalebi (Ya Baba)','No Mercy','Gunehgar','Intense Love','BUSY','Speed Se Badho','Shana Bann','LOBOTOMY','Bimari - B.D.S.M EP','Chetavani','Basti Ka Hasti','Insaan','Dhoondein Sitaare-Acoustic','GRIND','Bantai Ki Public','Bad Munda','Jingle Bell','Amin - Tadipaar','Khatam Hue Waande','Mirchi','Pink Venom','Baby','Believer','Thunder','On My Way','Darkside','Faded','Bad Boy (feat. Luana Kiara)','Yummy','Let Me Love You','Cheap Thrills','Safari','Bad Liar','Main Pal Do Pal Ka Shair Hoon','Aaj Mere Yaar Ki Shaadi Hai-From "Aadmi Sadak Ka"','Tum Agar Saath Dene Ka Vada Karo','Likhe Jo Khat Tujhe (From "Kanyadaan")','Teri Galiyon Mein','Mere Mehboob Qayamat Hogi','Mere Humsafar (Original Score) [Female Version]'];
    let val8 = availableTags.lastIndexOf(query)
if(val8 !== -1){
    let type = 'track';
    const url = `https://v1.nocodeapi.com/itsnizam2/spotify/qRMdtCbzemoBcKwg/search?q=${query}&type=${type}&perPage=2&page=0`;
    https.get(url, (response) => {
        response.on("data", (data) => {
            const data1 = JSON.parse(data);
            let name0 = data1.tracks.items[0].album.name;
            let name3 = data1.tracks.items[0].name;
            let lengths = data1.tracks.items[0].artists.length;
            let img = data1.tracks.items[0].album.images[1].url;
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
            let src = "songs/" + hyphensRemoved + ".mp3";
            if (array.length > 0) {
                let flag = 0;
                for (let i = 0; i < 1; i++) {
                    for (j = 0; j < array.length; j++) {
                        if (array[j].songnaam === name3) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag === 0) {
                        let obj = {
                            src1: src,
                            songnaam: name3,
                            singername: singers,
                            imag: img,
                            browse1:name0
                        };
                        array.unshift(obj);
                    }

                }
            } else {
                let obj = {
                    src1: src,
                    songnaam: name3,
                    singername: singers,
                    imag: img,
                    browse1:name0
                };
                array.push(obj);
            }
            res.render("browse", {
                browse:name0,
                name: name3,
                name2: singers,
                name3: img,
                names: src
            });
        })
    })
}else{
    setTimeout(()=>{
        res.render("unavailable",{song:query});

    },3000)
}
   
})

// ________
app.get("/history", (req, res) => {
    let array2 = []
    if (array.length === 0) {
        res.render("history", {array1: array2})
    } else {
        res.render("history1", {array1: array})

    }
})

app.listen(4000, () => console.log(`Example app listening on port 4000`));
