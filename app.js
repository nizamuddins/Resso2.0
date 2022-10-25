//jshint esversion:6
require("dotenv").config()
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require('https');
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const { use, authenticate } = require("passport");
const { profile } = require("console");
const { access } = require("fs");
const port = process.env.PORT || 3000

let sign=0;
let array = [];
let array2 = [];
let mails;
let mail1;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());
app.set("view engine", "ejs");

// express-session

app.use(session({
    secret:"resso2.0",
    resave:false,
    saveUninitialized:false
}))

// passport

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://nizam:nizam@cluster0.phabhjk.mongodb.net/Resso2-0data");

const dataSchema = mongoose.Schema({username: String,mail:String, password:String,googleId:String});
const dataSchema2 = mongoose.Schema({musicName: String,artists:String, image:String,source:String,filmName:String,mail:String});
dataSchema.plugin(passportLocalMongoose);
dataSchema.plugin(findOrCreate);
dataSchema2.plugin(findOrCreate);


let User = mongoose.model("ressodata",dataSchema);
let User2 = mongoose.model("historyData",dataSchema2);



passport.use(User.createStrategy());

passport.serializeUser((user,done)=>{
    done(null,user.id)
});
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    })
});


// google authenticate

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},

// function(accessToken,refreshToken,profile,cb){

//   User.findOrCreate({username:profile.displayName,mail: profile.emails[0].value, googleId: profile.id }, function (err, user) {
//     return cb(err, user);
//     });
// }

async function(accessToken, refreshToken, profile, cb) {
    mails =profile.displayName;
    mail1= profile.emails[0].value;
    let find = await User.findOne({googleId: profile.id });

    if(find === null && sign === 0){
        return cb(null);
    }else if(find!== null){
        User.findOne({googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
    else if(find === null && sign === 1){
        User.findOrCreate({username:profile.displayName,mail: profile.emails[0].value, googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }

  }

))



// loginpage
// get
app.get("/",(req,res)=>{
    sign = 0;
    res.sendFile(__dirname+"/login.html");

})


// signup
app.get("/signup",(req,res)=>{
    sign = 1;
    res.sendFile(__dirname+"/signup.html")
})

app.get("/resso2.0",async (req,res)=>{
    if(req.isAuthenticated()){
        res.sendFile(__dirname+"/index.html")
    }else{
        res.redirect("/");
    }
})


app.post("/signup",async(req,res)=>{
myfunc(req.body.username,req.body.mail);
    User.register({username:req.body.username,mail:req.body.mail,active:false},req.body.password,(err,user)=>{
        if(err){
            // res.send(err.message)
            console.log(err)
            res.redirect("/signup");
        }else{
            passport.authenticate("local")(req,res,()=>{
              res.redirect("/resso2.0");
            });
        }

    })


})

// login

app.post("/login",(req,res)=>{
myfunc(req.body.username,req.body.mail);
    let user = new User({
        mail:req.body.mail,
        password:req.body.password
    })

    req.login(user,(err)=>{
        if(err){
            console.log(err)
            res.redirect("/");
        }else{
            passport.authenticate("local")(req,res, ()=>{
                res.redirect("/resso2.0");
            });
        }

    })
})

app.get("/auth/google",
    passport.authenticate("google",{scope:['profile','email']}),
)

app.get("/auth/google/secrets",
passport.authenticate('google',{failureRedirect:"/"}),
(req,res)=>{
    setTimeout(()=>{
        res.redirect("/resso2.0");

    },3000)
}
)

// logout

app.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err)
        }
        res.redirect("/");
    });
})


// // -------------------
app.get('/YourFm', (req, res) => {
    if(req.isAuthenticated()){
        setTimeout(() => {
            res.render("yourfm")
        }, 2000);
    }else{
        res.redirect("/")
    }

})


app.get('/Browse', (req, res) => {
    if(req.isAuthenticated()){

         setTimeout(() => {
             if (array2.length === 0) {
                 res.render("browse", {
                     browse: "Browse",
                     name:"Tu Jaane Na",
                     name2: "Atif Aslam - Ajab Prem Ki Gazab Kahani",
                     name3: "images/tujaanena.jpg",
                     names: "songs/tujaanena.mp3"
                 })
             } else {
                 res.render("browse", {
                     browse:array2.filmName,
                     name:  array2.musicName,
                     name2: array2.artists,
                     name3: array2.image,
                     names: array2.source,
                 })
             }
         
         }, 2000);
    }else{
        res.redirect("/")
    }  
})
app.get("/history", async(req, res) => {
    if(req.isAuthenticated()){
        let data1 = await User2.find({mail:mail1});
        array = data1;
        let len = data1.length;
        if(len === 0){
            array2 = [];
        }else{
            array2 = data1[len-1]
        }

        if (array.length === 0) {
            res.render("history", {array1: array2})
        } else {
            res.render("history1", {array1: array})
        }
    }else{
        res.redirect("/")
    }
})
// post

app.post("/song", async(req, res) => {
    if(req.isAuthenticated()){
            const query = req.body.songName;
            var availableTags = ["Aila Re Aillaa",'Suno Chanda - Original Soundtrack','Suno Chanda Season 2',"Aayi Aayi Bhoot Police","Aaye Haaye","Tu Aake Dekhle","Abhi Toh Party Shuru Hui Hai","Awara","Ankhiyon Se Goli Maare","Ae Dil Hai Mushkil Title Track","Aadat","Aira Gaira","Agar Tu Hota","Abhi Mujh Mein Kahin","Ae Khuda","Allah Duhai Hai ","Aankh Marey","Apna Time Aayega",'Akdi Pakdi (From "Liger")',"Bolna","Bad Boy(From Saaho)","Bom Diggy Diggy","Bulleya","Bhar Do Jholi Meri","Bhula Dena","Baaton Ko Teri","Baadshah O Baadshah","Be Intehaan",'Bol Bol Bol - Jhankar','Bhool Bhulaiyaa 2 Title Track (From "Bhool Bhulaiyaa 2")',"Bande Hain Hum Uske",'Coka 2.0 (From "Liger")','Chaiyaan Mein Saiyaan Ki','Chhora Ganwar','Deva Deva (From "Brahmastra")','Dil (From "Ek Villain Returns")','Dil (Shreya’s Version) [From "Ek Villain Returns"]','Fitoor','Galliyan Returns (From "Ek Villain Returns")','I Love My India',"Jhoom (R&B MIX)",'Kesariya (From "Brahmastra")','La Ilaaj','Nain Ta Heere (From "Jugjugg Jeeyo")','Raksha Bandhan - Reprise','Rangisari (From "Jugjugg Jeeyo")','Rubaru','Paracetamol',"Roke Na Ruke Naina",'Shaamat (From "Ek Villain Returns")','Something in the Orange','Tum Pyaar Ho','Tere Saath Hoon Main (From "Raksha Bandhan")','Tur Kalleyan (From "Laal Singh Chaddha")',"Zara Sa (Lofi Flip)",'Naacho Naacho (From "Rrr")','Jeeye To Jeeye Kaise - From "Saajan- Hindi"','Tujh Mein Rab Dikhta Hai','Kusu Kusu (From "Satyameva Jayate 2")','Raataan Lambiyan (From "Shershaah")','Srivalli (From "Pushpa The Rise Part - 01")','Baarish Ban Jaana','Lut Gaye','Maiyya Mainu','Khairiyat','Khal Nayak Hoon Main','Tujhe Dekha To','Gali Gali (From "Kgf Chapter 1")','Vaaste','Mehabooba','O Saki Saki (From "Batla House")','Dil Galti Kar Baitha Hai','Hookah Bar','Tum Hi Aana (From "Marjaavaan")','Humnava Mere','Thoda Thoda Pyaar','Lungi Dance (From "Lungi Dance")','Muqabla (From "Street Dancer 3D")',"Bachpan Ka Pyaar",'Jugnu','Filhaal2 Mohabbat','Jeene Laga Hoon','Samjhawan','Sunn Raha Hai (From "Aashiqui 2")','Dil Tod Ke','Mann Bharryaa 2.0 (From "Shershaah")','Dil Meri Na Sune','Rait Zara Si','Ranjha (From "Shershaah")','Prem Ratan Dhan Payo','Teri Mitti','Sanam Re','O Re Piya','Kabira','Kaun Tujhe (From "M.S.Dhoni - The Untold Story")','Dilbar (From "Satyameva Jayate")','Afghan Jalebi (Ya Baba)','No Mercy','Gunehgar','Intense Love','BUSY','Speed Se Badho','Shana Bann','LOBOTOMY','Bimari - B.D.S.M EP','Chetavani','Basti Ka Hasti','Insaan','Dhoondein Sitaare-Acoustic','GRIND','Bantai Ki Public','Bad Munda','Jingle Bell','Amin - Tadipaar','Khatam Hue Waande','Mirchi','Pink Venom','Baby','Believer','Thunder','On My Way','Darkside','Faded','Bad Boy (feat. Luana Kiara)','Yummy','Let Me Love You','Cheap Thrills','Safari','Bad Liar','Main Pal Do Pal Ka Shair Hoon','Aaj Mere Yaar Ki Shaadi Hai-From "Aadmi Sadak Ka"','Tum Agar Saath Dene Ka Vada Karo','Likhe Jo Khat Tujhe (From "Kanyadaan")','Teri Galiyon Mein','Mere Mehboob Qayamat Hogi','Mere Humsafar (Original Score) [Female Version]'];
            let val8 = availableTags.lastIndexOf(query)
            console.log(val8)
        if(val8 !== -1){
            let type = 'track';
            const url = `https://v1.nocodeapi.com/nizam96/spotify/fhEBqmrzKyXPkvFO/search?q=${query}&type=${type}&perPage=2&page=0`;
            https.get(url, async(response) => {
                response.on("data", async(data) => {
                    const data1 = JSON.parse(data);
                    let filmname = data1.tracks.items[0].album.name;
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
                
        // historyDatabase****************************************************************
                    let data2 = await User2.findOrCreate({
                        musicName: name3,
                        artists: singers,
                        image: img,
                        source: src,
                        filmName:filmname,
                        mail:mail1
                    }, function (err, user) {
                        if(err){
                        console.log(err)
                        }else{
                            console.log(user)
                        }
                    
                    });
        // *******************************************************************************
        // responseto/song
                    res.render("browse", {
                        browse:filmname,
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
            
            },2000)
        }
    }else{
        res.redirect("/")
    }
   
})

// *************************************************************************************
// HistoryCleaning

app.post("/clear",async(req,res)=>{
let data1 = await User2.deleteMany({mail:mail1});
    res.redirect('/history')
})

// *************************************************************************************


// Settings

let myfunc = (uname,mail2)=>{
    mails = uname;
    mail1=mail2;
}

app.get("/settings",async(req,res)=>{

    if(req.isAuthenticated()){
        setTimeout(async()=>{

        let data2 =await User.findOne({username:mails});
        console.log(mails)

        res.render("settings",{Name:mails,Email:data2.mail})
    },3000)

    }else{
        res.redirect("/")
    }
    

})

// *************************************************************************************
// AccountDeletion

app.get("/delete",async(req,res)=>{
    
    let data1 = await User2.deleteMany({mail:mail1});
    let data2 = await User.deleteMany({mail:mail1});
    res.redirect("/")

})


app.listen(port, () => console.log(`Example app listening on port 4000`));
