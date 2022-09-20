// singernames
let object = {
    "Jhoom(R&BMIX)": "Jhoom (R&B MIX)-Ali Zafar",
    RokeNaRukeNaina: "Arijit-Singh - Badrinath Ki Dulhania",
    tujaanena: 'Atif Aslam - Ajab Prem Ki Gazab Kahani',
    BharDoJholiMeri: "Adnan Sami-Bajrangi Bhaijaan",
    "ZaraSa(LofiFlip)": "Pritam,KK - Jannat (Orignal Motion Picture Soundtrack)"
}
// Searchform**********
$(function () {
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
        "Jhoom (R&B MIX)",
        "Roke Na Ruke Naina",
        "Zara Sa (Lofi Flip)"
    ];
    $("#tags").autocomplete({
        source: availableTags
    }, {minLength: 2});
});

// browse
let singer = $("#singer");
let song1 = $("#song").text();

$('#playPause1').addClass('playgif2');
$('#playPause2').addClass('play1');
$('#playPause2').addClass('fa-play');

// songsbyyourfm
let songname = song1.split(" ")
let joinName = songname.join("")
let name_1 = object[joinName];
singer.text(name_1);

// changingImage
let lower = joinName.toLowerCase();
let static = $("#dynamicimage");
static.attr("src", "images/" + lower + ".jpg");

// ***** playSongs

let audio1 = document.getElementById("audio1");
console.log(audio1)

let songs = $("#songs1");
let start = true;
songs.click(function () {
    lastImgtext(song1, name_1, lower);
    $(".width").animate({height: "300px"})

    if (start) {
        audio1.play();
        start = false;
        play1(); 
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
    } else {
        audio1.pause();
        start = true;
        play2();
        $('.lstPlay').removeClass('fa-pause');
        $('.lstPlay').addClass('fa-play');
    }

})
function lastImgtext(name1, name2, name3) {

    $(".lastimg").attr("src", "images/" + name3 + ".jpg")
    $('.musicName').text(name1);
    $('.singers').text(name2)

}
// range******

audio1.addEventListener("timeupdate", (e) => {
    var range = $('#range');
    let currenttime = e.currentTarget.currentTime
    let duration = e.currentTarget.duration;
    let width = (currenttime / duration) * 100;
    range.val(width);
    if (range.val() == 100) {
        $('.lstPlay').addClass('fa-play');
        $('.lstPlay').removeClass('fa-pause');
        play2();
        start = true;
    }
})

$('.lstPlay').click((e) => {
    if ($('.lstPlay').hasClass('fa-play')) {
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
        play1();
        audio1.play();
    } else {
        $('.lstPlay').removeClass('fa-pause');
        $('.lstPlay').addClass('fa-play');
       play2();
        audio1.pause();
    }
})
function play1(){
    $('#playPause1').addClass('playgif2');
    $('#playPause2').addClass('play1');
    $('#playPause2').addClass('fa-pause');
    $('#playPause2').removeClass('fa-play');
}
function play2(){
    $('#playPause1').addClass('playgif2');
    $('#playPause2').addClass('play1');
    $('#playPause2').addClass('fa-play');
}

// playingsongs let songs = $("#songs1");     songs.click(function () {
// let music1 = song.text()         let music3 = music1.split(" ");         let
// music4 = music3.join("");         let singer = object[music4]         let
// music2 = music4.toLowerCase()PlayMusic(music2);         lastImgtext(music1,
// singer);         console.log(singer)     })function PlayMusic(songName2) {
// let audio = new         Audio("songs/" + songName2 + ".mp3");
// setTimeout(() => {             audio.play();         }, 50);     }, 2000)
// $('.lstPlay').click((e) => {     lstPlay(); })function lstPlay() {     let
// music1 = song.text()     let music3 = music1.split(" ");     let music4 =
// music3.join("");     let music2 = music4.toLowerCase();     let audio4 = new
// Audio("songs/" + music2 + ".mp3");     if ($('.lstPlay').hasClass('fa-play'))
// {         $('.lstPlay').removeClass('fa-play');
// $('.lstPlay').addClass('fa-pause');         audio4.play()     } else {
// $('.lstPlay').removeClass('fa-pause');
// $('.lstPlay').addClass('fa-play');         audio4.pause()     } }
// audio.addEventListener('timeupdate', (e) => {     let currenttime =
// e.target.currentTime changingEvery() }) } )