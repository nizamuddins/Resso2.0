// singernames
let object = {
    "jhoom(R&BMIX)": "Jhoom (R&B MIX)-Ali Zafar",
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
        "jhoom (R&B MIX)",
        "Roke Na Ruke Naina",
        "Zara Sa (Lofi Flip)"
    ];
    $("#tags").autocomplete({
        source: availableTags
    }, {minLength: 2});
});

// browse
let singer = $("#singer");
let song = $("#song");

$("form").submit((e) => {
    let inputValue = document
        .querySelector(".input2")
        .value
        e
        .preventDefault();
    setTimeout(() => {
        // changingNames
        if (inputValue !== "") {
            let songname = inputValue.split(" ")
            let joinName = songname.join("")
            let name_1 = object[joinName];
            song.text(inputValue)
            singer.text(name_1);
            // changingImage
            let lower = joinName.toLowerCase();
            let static = $("#imagestatic");
            static.attr("src", "images/" + lower + ".jpg");
        }

    }, 2000)

})

// songsbyyourfm
var song1 = $("#song").text();
let songname = song1.split(" ")
let joinName = songname.join("")
let name_1 = object[joinName];
singer.text(name_1);
// changingImage
let lower = joinName.toLowerCase();
let static = $("#dynamicimage");
static.attr("src", "images/" + lower + ".jpg");

let audio1 = document.getElementById("audio1");
let songs = $("#songs1");
songs.click(function () {
audio1.play()
})

//  addingplayandpause

// $('#playPause1').addClass('playgif2');
// $('#playPause2').addClass('play1');
// $('#playPause2').addClass('fa-play');

// //  playingsongs

// let songs = $("#songs1");
// songs.click(function () {
//     $('#playPause1').addClass('playgif2');
//     $('#playPause2').addClass('play1');
//     $('#playPause2').addClass('fa-pause');
//     $('#playPause2').removeClass('fa-play');

//     $(".width").animate({height: "300px"})

//     let music1 = song.text()
//     let music3 = music1.split(" ");
//     let music4 = music3.join("");
//     let singer = object[music4]
//     let music2 = music4.toLowerCase()

//     PlayMusic(music2);
//     lastImgtext(music1, singer);
//     console.log(singer)

// })

// function PlayMusic(songName2) {
//     let audio = new Audio("songs/" + songName2 + ".mp3");
//     $('.lstPlay').removeClass('fa-play');
//     $('.lstPlay').addClass('fa-pause');
//     setTimeout(() => {
//         audio.play();

//         let id = setInterval(() => {
//             var range = $('#range');
//             let currenttime = audio.currentTime
//             let duration = audio.duration;;
//             let width = (currenttime / duration) * 100;
//             range.val(width)
//             if (range.val() == 100) {
//                 range.val(0);
//                 clearInterval(id)
//                 $('.lstPlay').addClass('fa-play');
//                 $('.lstPlay').removeClass('fa-pause');
//             }

//         }, 50);

//     }, 2000)
//     $('.lstPlay').click((e) => {
//         if ($('.lstPlay').hasClass('fa-play')) {
//             $('.lstPlay').removeClass('fa-play');
//             $('.lstPlay').addClass('fa-pause');
//             audio.play();

//         } else {
//             $('.lstPlay').removeClass('fa-pause');
//             $('.lstPlay').addClass('fa-play');
//             audio.pause();

//         }

//     })

// }

// $('.lstPlay').click((e) => {
//     lstPlay();
// })
// function lstPlay() {
//     let music1 = song.text()
//     let music3 = music1.split(" ");
//     let music4 = music3.join("");
//     let music2 = music4.toLowerCase();
//     let audio4 = new Audio("songs/" + music2 + ".mp3");

//     if ($('.lstPlay').hasClass('fa-play')) {
//         $('.lstPlay').removeClass('fa-play');
//         $('.lstPlay').addClass('fa-pause');
//         audio4.play()
//     } else {
//         $('.lstPlay').removeClass('fa-pause');
//         $('.lstPlay').addClass('fa-play');
//         audio4.pause()

//     }

// }
// audio.addEventListener('timeupdate', (e) => {     let currenttime =
// e.target.currentTime changingEvery()     }) })
function lastImgtext(images, name) {
    let music2 = images.toLowerCase()
    let music3 = music2.split(" ");
    let music4 = music3.join("");
    $(".lastimg").attr("src", "images/" + music4 + ".jpg")
    $('.musicName').text(images);
    $('.singers').text(name)

}
