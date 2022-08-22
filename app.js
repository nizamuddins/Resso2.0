const express = require('express');
const res = require('express/lib/response');
const app = express();

app.use(express.static('public'));
app.set("view engine","ejs")
app.get('/', (req, res) => res.sendFile(__dirname +"/index.html"));

app.get('/YourFm',(req,res)=>{res.render("yourfm")})
app.get('/ForYou',(req,res)=>{res.render("foryou")})
app.get('/Browse',(req,res)=>{res.render("browse")})

app.listen(4000, () => console.log(`Example app listening on port 4000`));