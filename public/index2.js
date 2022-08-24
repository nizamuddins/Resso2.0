// singernames
let object={
  "jhoom(R&BMIX)":"Jhoom (R&B MIX)-Ali Zafar",
  RokeNaRukeNaina:"Arijit-Singh - Badrinath Ki Dulhania",
}


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
// singer.text()

let singer = $("#singer");
let song = $("#song").text();
let songname = song.split(" ")
let joinName = songname.join("")
let name = object[joinName];
singer.text(name);


let lower = joinName.toLowerCase();

let dynamicimage = $("#dynamicimage");

dynamicimage.attr("src","images/"+lower+".jpg");
