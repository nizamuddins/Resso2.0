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
$("form").submit((e)=>{
  let inputValue = document.querySelector(".input2").value
  e.preventDefault();
setTimeout(()=>{
// changingNames
let singer = $("#singer");
let song = $("#song");
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

const songsList = $('.trend')
songsList.mouseover((e) => {

    const classes = $(e.currentTarget).attr('class');
    const divide = classes
        .split(' ')
        .pop();

    $('#' + divide + 's').addClass('playgif2');

    $('#' + divide + 'sa').addClass('play1');
    $('#' + divide + 'sa').addClass('fa-play');
    setTimeout(() => {
        $('#jhooms').addClass('jhoom');
        $('#ajabs').addClass('ajab');
        $('#zaras').addClass('zara');
        $('#remixs').addClass('remix');
        $('#rokes').addClass('roke');

    }, 500)

})
songsList.mouseleave((e) => {

    const classes = $(e.currentTarget).attr('class');
    const divide = classes
        .split(' ')
        .pop();

    $('#' + divide + 's').removeClass('playgif2');
    $('#' + divide + 'sa').removeClass('play1');
    $('#' + divide + 'sa').removeClass('fa-play');

})


// // playingsongs


// let songs = $("#songs");

// songs.click(function (){
// console.log(joinName)
//   let audio = new Audio("songs/"+lower+".mp3");
//   setTimeout(()=>{
//     audio.play();

//   },2000)


// })

