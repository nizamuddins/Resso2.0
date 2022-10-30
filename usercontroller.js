const passport = require("passport");
const https = require('https');
const mongodb = require("mongodb");
const db = require('./User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


let signIn = 0;
let array = [];
let array2 = [];
let mess = [];

// GoogleStrategy**********************************************************

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},

async function(accessToken, refreshToken, profile, cb) {
    let find = await db.User.findOne({googleId: profile.id });
    if(find === null && signIn === 0){
        mess = [{message:"Not a Registered User"}];
        return cb(null);
    }else if(find !== null && signIn === 0){
        db.User.findOne({googleId: profile.id }, function (err, user) {

            return cb(err, user);
        })
    }
    else if(find!== null && signIn === 1){
        mess = [{message:"A user with the given email is already registered"}];

       return cb(null)
    }
    else if(find === null && signIn === 1){

        db.User.findOrCreate({username:profile.displayName,mail: profile.emails[0].value, googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });

    }

  }

))

// **********************************************************************************************************************
// Routes

class userController{

    // get*****************************
    static gettLogin = async (req,res)=>{
        signIn = 0;
        res.render("login",{message:mess});
        mess = [];
    }

    static getSignup = async(req,res)=>{
            signIn = 1;
            res.render("signup",{message:req.flash('message')});
        
    }
    static getResso = async(req,res)=>{
        if(req.isAuthenticated()){
            res.render("yourfm")
        }else{
            res.redirect("/");
        }
    }

    // post***************************

    static postLogin = async(req,res)=>{
        let user = new db.User({
                    mail:req.body.mail,
                    password:req.body.password
                })
            
                const {username,password} = req.body;
                if(username && password){
                const find = await db.User.findOne({username:username})
                    if(find !== null){
                            if(find.username === req.body.username){
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
                            }else{
                              mess =  [{ message: 'username or password is incorrect' }]
                                res.redirect("/");
                            }
                    }
                    else{
                        mess = [{ message: 'username or password is incorrect' }]
                        res.redirect("/");
                    }
                }else{
                    mess = [{ message: 'All fields are required' }]
                    res.redirect("/");
                }
               
    }
    
    static postSignup = async(req,res)=>{
        const {username,mail,password} = req.body;
          if(username && mail && password){
            let find = await db.User.findOne({mail:mail})

            if(find !== null){
                req.flash("message",[{message:"A user with the given email is already registered"}])
                res.redirect("/signup");
            }else{
            
                db.User.register({username:username,mail:mail,active:false},password,(err,user)=>{
                  if(err){
                        req.flash("message",err)
                        res.redirect("/signup");
                    }else{

                        passport.authenticate("local")(req,res,()=>{
                          res.redirect("/resso2.0");
                        });
                    }
            
                })
            
            }
          }else{
            req.flash("message",[{ message: 'All fields are required' }])
            res.redirect("/signup");
          }
    }

    // googleRoutes*******************

    static googleAuth = passport.authenticate("google",{scope:['profile','email']});

    static googleouath2O = passport.authenticate("google",{failureRedirect:"/"});

    // yourfm

    static yourFm =async (req, res) => {if(req.isAuthenticated()){setTimeout(() => {res.render("yourfm")}, 2000);}else{res.redirect("/")}};
    static browse =async (req, res) => {if(req.isAuthenticated()){setTimeout(() => 
            {if (array2.length === 0) {
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
        }

        // history

    static history =  async(req, res) => {
            if(req.isAuthenticated()){
                let userName = req.user.username
        
                let data1 = await db.User.find({username:userName});
                data1.shift();
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
    }

    // browsing songs
    static Song = async(req, res) => {
            if(req.isAuthenticated()){
                let userName = req.user.username;
                    const query = req.body.songName;
                    var availableTags = ["Aila Re Aillaa",'Suno Chanda - Original Soundtrack','Suno Chanda Season 2',"Aayi Aayi Bhoot Police","Aaye Haaye","Aye Khuda","Tu Aake Dekhle","Abhi Toh Party Shuru Hui Hai","Awara","Ankhiyon Se Goli Maare","Ae Dil Hai Mushkil Title Track","Aadat","Aira Gaira","Agar Tu Hota","Abhi Mujh Mein Kahin","Ae Khuda","Allah Duhai Hai ","Aankh Marey","Apna Time Aayega",'Akdi Pakdi (From "Liger")',"Bolna","Bad Boy(From Saaho)","Bom Diggy Diggy","Bulleya","Bhar Do Jholi Meri","Bhula Dena","Baaton Ko Teri","Baadshah O Baadshah","Be Intehaan",'Bol Bol Bol - Jhankar','Bhool Bhulaiyaa 2 Title Track (From "Bhool Bhulaiyaa 2")',"Bande Hain Hum Uske",'Coka 2.0 (From "Liger")','Chaiyaan Mein Saiyaan Ki','Chhora Ganwar','Deva Deva (From "Brahmastra")','Dil (From "Ek Villain Returns")','Dil (Shreya’s Version) [From "Ek Villain Returns"]','Fitoor','Galliyan Returns (From "Ek Villain Returns")','I Love My India',"Jhoom (R&B MIX)",'Kesariya (From "Brahmastra")','La Ilaaj','Nain Ta Heere (From "Jugjugg Jeeyo")','Raksha Bandhan - Reprise','Rangisari (From "Jugjugg Jeeyo")','Rubaru','Paracetamol',"Roke Na Ruke Naina",'Shaamat (From "Ek Villain Returns")','Something in the Orange','Tum Pyaar Ho','Tere Saath Hoon Main (From "Raksha Bandhan")','Tur Kalleyan (From "Laal Singh Chaddha")',"Zara Sa (Lofi Flip)",'Naacho Naacho (From "Rrr")','Jeeye To Jeeye Kaise - From "Saajan- Hindi"','Tujh Mein Rab Dikhta Hai','Kusu Kusu (From "Satyameva Jayate 2")','Raataan Lambiyan (From "Shershaah")','Srivalli (From "Pushpa The Rise Part - 01")','Baarish Ban Jaana','Lut Gaye','Maiyya Mainu','Khairiyat','Khal Nayak Hoon Main','Tujhe Dekha To','Gali Gali (From "Kgf Chapter 1")','Vaaste','Mehabooba','O Saki Saki (From "Batla House")','Dil Galti Kar Baitha Hai','Hookah Bar','Tum Hi Aana (From "Marjaavaan")','Humnava Mere','Thoda Thoda Pyaar','Lungi Dance (From "Lungi Dance")','Muqabla (From "Street Dancer 3D")',"Bachpan Ka Pyaar",'Jugnu','Filhaal2 Mohabbat','Jeene Laga Hoon','Samjhawan','Sunn Raha Hai (From "Aashiqui 2")','Dil Tod Ke','Mann Bharryaa 2.0 (From "Shershaah")','Dil Meri Na Sune','Rait Zara Si','Ranjha (From "Shershaah")','Prem Ratan Dhan Payo','Teri Mitti','Sanam Re','O Re Piya','Kabira','Kaun Tujhe (From "M.S.Dhoni - The Untold Story")','Dilbar (From "Satyameva Jayate")','Afghan Jalebi (Ya Baba)','No Mercy','Gunehgar','Intense Love','BUSY','Speed Se Badho','Shana Bann','LOBOTOMY','Bimari - B.D.S.M EP','Chetavani','Basti Ka Hasti','Insaan','Dhoondein Sitaare-Acoustic','GRIND','Bantai Ki Public','Bad Munda','Jingle Bell','Amin - Tadipaar','Khatam Hue Waande','Mirchi','Pink Venom','Baby','Believer','Thunder','On My Way','Darkside','Faded','Bad Boy (feat. Luana Kiara)','Yummy','Let Me Love You','Cheap Thrills','Safari','Bad Liar','Main Pal Do Pal Ka Shair Hoon','Aaj Mere Yaar Ki Shaadi Hai-From "Aadmi Sadak Ka"','Tum Agar Saath Dene Ka Vada Karo','Likhe Jo Khat Tujhe (From "Kanyadaan")','Teri Galiyon Mein','Mere Mehboob Qayamat Hogi','Mere Humsafar (Original Score) [Female Version]'];
                    let val8 = availableTags.lastIndexOf(query)
                if(val8 !== -1){
                    let type = 'track';
                    const url = `https://v1.nocodeapi.com/nizam96/spotify/fhEBqmrzKyXPkvFO/search?q=${query}&type=${type}&perPage=2&page=0`;
                    https.get(url, async(response) => {
                        response.on("data", async(data) => {
                            const data1 = JSON.parse(data);
                            let filmname = data1.tracks.items[0].album.name;
                            let name3 = data1.tracks.items[0].name;
                            let lengths = data1.tracks.items[0].artists.length;
                            let img = data1.tracks.items[0].album.images[0].url;
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
                            let data2 = await db.User.findOrCreate({
                                musicName: name3,
                                artists: singers,
                                image: img,
                                source: src,
                                filmName:filmname,
                                username:userName                        
                            }, function (err, user) {
                                if(err){
                                console.log(err)
                                }else{
                                    console.log("successfully datasaved")
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
           
        }

    static Clear = async(req,res)=>{
            let userName = req.user.username;
            let data1 =await db.User.find({username:userName});
            data1.shift();
        
            data1.forEach(async(a)=>{
            let result = await db.User.deleteOne({_id:new mongodb.ObjectId(a._id)})
        
            })
            res.redirect('/history')
    }    


    static Settings = async(req,res)=>{

            if(req.isAuthenticated()){
                let userName = req.user.username;
                mess =[];
                setTimeout(async()=>{
        
                let data2 =await db.User.findOne({username:userName});
        
                res.render("settings",{Name:data2.username,Email:data2.mail})
            },3000)
        
            }else{
                res.redirect("/")
            }
            
        
    }
    
    static AccountDeletion = async(req,res)=>{
            if(req.isAuthenticated()){
             let userName = req.user.username
             let data1 = await db.User.deleteMany({username:userName});
             res.redirect("/")
            }else{
                res.redirect("/");
            } 
            
    }

    static Forgot = async(req,res)=>{
            res.render("forgotPass",{message:req.flash('message')});
    }

    static postForgot = async(req,res)=>{
          let user = await db.User.findOne({mail:req.body.reset})
            if(user === null || user.googleId){
                req.flash("message",[{message:"No account with that email address exists."}])
                res.redirect("/forgot");
            }else{
                res.render("changePass",{message:req.flash('message'),object:req.body.reset});
            }
    }


    static NewPassword = async(req,res)=>{
        const {newPass,retype,button} = req.body;
        let find = await db.User.findOne({mail:button});
        if(newPass,retype){
               if(newPass === retype){
                let user2 = await db.User.deleteOne({mail:button})
                db.User.register({username:find.username,mail:find.mail,active:false},newPass,(err,user)=>{
                    if(!err){
                            res.redirect("/");
                      }
                  })
                }else{
                    res.render("changePass",{message:[{message:'New Password and Confirm Password Field do not match '}],object:button});
                }
        }
        else{
            res.render("changePass",{message:[{message:'All fields are required'}],object:button});
        }
    }


    static Logout = (req,res)=>{
            req.logout((err)=>{
                if(err){
                    console.log(err)
                }
                res.redirect("/");
            });
    }

}


  


module.exports = userController;
