
// singernames
let object = {
    "Jhoom(R&BMIX)": "Jhoom (R&B MIX)-Ali Zafar",
    RokeNaRukeNaina: "Arijit-Singh - Badrinath Ki Dulhania",
    tujaanena: 'Atif Aslam - Ajab Prem Ki Gazab Kahani',
    BharDoJholiMeri: "Adnan Sami-Bajrangi Bhaijaan",
    "ZaraSa(LofiFlip)": "Pritam,KK - Jannat (Orignal Motion Picture Soundtrack)"
}
let body = $("body");
// browse
let singer = $("#singer");
let song1 = $("#song").text();
let letter = song1[0];
let songArray = [];

var availableTags = ["Aila Re Aillaa","Aayi Aayi Bhoot Police","Aaye Haaye","Abhi Toh Party Shuru Hui Hai","Awara","Ankhiyon Se Goli Maare","Ae Dil Hai Mushkil","Aadat","Aira Gaira","Agar Tu Hota","Abhi Mujh Mein Kahin","Ae Khuda","Allah Duhai Hai ","Aankh Marey","Apna Time Aayega","Bhool Bhulaiyaa 2","Bolna","Bad Boy","Bom Diggy Diggy","Bulleya","Bhar Do Jholi Meri","Bhula Dena","Baaton Ko Teri","Baadshah O Baadshah","Boss (Title Song)","Be Intehaan","Bande Hain Hum","Jhoom (R&B MIX)","Roke Na Ruke Naina","Zara Sa (Lofi Flip)"];
availableTags.forEach((a)=>{
if(a[0]===letter){
songArray.push(a)
}

})
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
        "Bhool Bhulaiyaa 2",
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
availableTags.forEach((a)=>{
if(a[0]===letter){
    songArray.push(a)
}

})
    $("#tags").autocomplete({
        source: availableTags
    }, {minLength: 2});
});
// ______________________________________

$('#playPause1').addClass('playgif2');
$('#playPause2').addClass('play1');
$('#playPause2').addClass('fa-play');

$('.li1').click((e) => {
    $(e.currentTarget).addClass('li1s');

})
// songsbyyourfm
let songname = song1.split(" ")
let joinName = songname.join("")
let name_1 = singer.text();
singer.text(name_1);

// changingImage
let lower = joinName.toLowerCase();
let static = $("#dynamicimage");
let src = static.attr("src");
// static.attr("src", "images/" + lower + ".jpg");

// ***** playSongs

let audio1 = document.getElementById("audio1");

let songs = $("#songs1");
let start = true;
songs.click(function () {
    lastImgtext(song1, name_1, src);
    $(".width").animate({height: "300px"})

    if (start) {
        setTimeout(()=>{
            audio1.play();
    
        },2000);
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

// keydown***

body.keydown((e)=>{
    if (e.key === " ") {
    $(".width").animate({height: "300px"})
    lastImgtext(song1, name_1, lower);
        e.preventDefault();
        if ($('.lstPlay').hasClass('fa-play')) {
            $('.lstPlay').removeClass('fa-play');
            $('.lstPlay').addClass('fa-pause');
            play1();
            setTimeout(()=>{
                audio1.play();
        
            },2000)
        } else {
            $('.lstPlay').removeClass('fa-pause');
            $('.lstPlay').addClass('fa-play');
           play2();
            audio1.pause();
        }

    }    if (e.key === "m") {

        if ($('.vol').hasClass('fa-volume-high')) {
            $('.vol').addClass('fa-volume-xmark fs-5');
            $('.vol').removeClass('fa-volume-high');
            mute();
        } else {
            $('.vol').removeClass('fa-volume-xmark fs-5');
            $('.vol').addClass('fa-volume-high');
            unmute();
        }

    }

})

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
    lastImgtext(song1, name_1, lower);
    $(".width").animate({height: "300px"})

    if ($('.lstPlay').hasClass('fa-play')) {
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
        play1();
        setTimeout(()=>{
            audio1.play();
    
        },2000)
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
// lstImg
function lastImgtext(name1, name2, name3) {

    $(".lastimg").attr("src", name3)
    $('.musicName').text(name1);
    $('.singers').text(name2)

}

$('.smallrange').change(() => {
    let change = +($('.smallrange').val())
    change = ((change) / 100).toFixed(1);

    if (change === 0.0) {
        mute();
    } else {
        $('.vol').removeClass('fa-volume-xmark fs-5');
        $('.vol').addClass('fa-volume-high');
        audio1.muted = false;

    }

    volume_change(change)
})

// Mute and Unmute
$('.volume').mouseover(() => {
    $('.rangesmall').css('visibility', 'visible')
})
$('.rangesmall').mouseleave(() => {
    $('.rangesmall').css('visibility', 'hidden')
})

$('.volume').click(() => {
    if ($('.vol').hasClass('fa-volume-high')) {
        $('.vol').addClass('fa-volume-xmark fs-5');
        $('.vol').removeClass('fa-volume-high');
        mute();
    } else {
        $('.vol').removeClass('fa-volume-xmark fs-5');
        $('.vol').addClass('fa-volume-high');
        unmute();
    }

})

// mute
function mute() {
    audio1.muted = true;
    let val = document.querySelector('.smallrange');
    val.value = 0;

}
// unmute

function unmute() {
    audio1.muted = false;

    let val = document.querySelector('.smallrange');
    val.value = 100;
    volume_change(100 / 100)

}
function volume_change(changes) {
    audio1.volume = changes;
}

///////////////////////////////////////////
// forward and backwaRD

let val = 0;
$('.forward').click(() => {
    let gaana = songArray[val].split(" ")
    let joinName = gaana.join("")
    // let name_1 = object[joinName];
    // singer.text(name_1);

// changingImage
    let lower = joinName.toLowerCase();
    $('.lstPlay').removeClass('fa-play');
    $('.lstPlay').addClass('fa-pause');
    audio1.pause();
    audio1 = new Audio("songs/"+lower+".mp3");
    setTimeout(()=>{
        audio1.play();

    },2000)
    if(val!== songArray.length){
        val++;

    }
    console.log(val)
})
// backward****

$('.backward').click(() => {
    // if(val >= 0){
    //     val--;
    //     val--;

    // }
    let gaana = songArray[val].split(" ")
    let joinName = gaana.join("")
    // let name_1 = object[joinName];
    // singer.text(name_1);

// changingImage
    let lower = joinName.toLowerCase();
    $('.lstPlay').removeClass('fa-play');
    $('.lstPlay').addClass('fa-pause');
    audio1.pause();
    audio1 = new Audio("songs/"+lower+".mp3");
    setTimeout(()=>{
        audio1.play();

    },2000)
  
    console.log(val)

   
})
