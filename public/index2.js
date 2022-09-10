// singernames
let object={
  "jhoom(R&BMIX)":"Jhoom (R&B MIX)-Ali Zafar",
  RokeNaRukeNaina:"Arijit-Singh - Badrinath Ki Dulhania",
  tujaanena:'Atif Aslam - Ajab Prem Ki Gazab Kahani',
}
// Searchform**********
$( function() {
  var availableTags = [
    "Aila Re Aillaa",
    "Aayi Aayi Bhoot Police",
    "Aaye Haaye",
    "Abhi Toh Party Shuru Hui Hai",
    "Awara",
    "Ankhiyon Se Goli Maare",
    "Ae Dil Hai Mushkil",
    "Aadat",
    "Aira Gaira",
    "Agar Tu Hota",
    "Abhi Mujh Mein Kahin",
    "Ae Khuda",
    "Allah Duhai Hai ",
    "Aankh Marey",
    "Apna Time Aayega",
    "Bhool Bhulaiyaa",
    "Bolna",
    "Bad Boy",
    "Bom Diggy Diggy",
    "Bulleya",
    "Bhar Do Jholi Meri",
    "Bhula Dena",
    "Baaton Ko Teri",
    "Baadshah O Baadshah",
    "Boss (Title Song)",
    "Be Intehaan",
    "Bande Hain Hum",
    "jhoom (R&B MIX)",
    "Roke Na Ruke Naina" 
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  },{

    minLength:2,
  }
  );
} );



// browse
let singer = $("#singer");
let song = $("#song");

$("form").submit((e)=>{
  let inputValue = document.querySelector(".input2").value
  e.preventDefault();
setTimeout(()=>{
// changingNames

let songname = inputValue.split(" ")
let joinName = songname.join("")
let name_1 = object[joinName];
song.text(inputValue)
singer.text(name_1);
// changingImage
let lower = joinName.toLowerCase();
let static = $("#imagestatic");
static.attr("src","images/"+lower+".jpg");
},2000)  


})

// // addingplayandpause

  $('#playPause1').addClass('playgif2');
  $('#playPause2').addClass('play1');
  $('#playPause2').addClass('fa-play');

// // playingsongs


let songs = $("#songs1");
songs.click(function (){
    $('#playPause1').addClass('playgif2');
    $('#playPause2').addClass('play1');
    $('#playPause2').addClass('fa-pause');
    $('#playPause2').removeClass('fa-play');

    $(".width").animate({height:"300px"})

    let music1 = song.text()
    let music2 = music1.toLowerCase()
    let music3 = music2.split(" ");
    let music4 = music3.join("");
    let singer = object[music4]
    PlayMusic(music4);
    lastImgtext(music1,singer);   
 
  
})
  
function PlayMusic(songName2){
  let audio = new Audio("songs/"+songName2+".mp3");
  setTimeout(()=>{
    audio.play();

  },2000)

}
function lastImgtext(images,name){
  let music2 = images.toLowerCase()
  let music3 = music2.split(" ");
  let music4 = music3.join("");
$(".lastimg").attr("src","images/"+music4+".jpg")
$('.musicName').text(images);
$('.singers').text(name)

}

