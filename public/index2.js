let body = $("body");
// browse
let singer = $("#singer");
let song1 = $("#song").text();

// Searchform**********
$(function () {
    var availableTags = [
        "Aila Re Aillaa",
        "Aayi Aayi Bhoot Police",
       'Aaye Haaye (From "Time To Dance")',
        "Awara",
        'Ankhiyon Se Goli Mare (From "Pati Patni Aur Woh")',
        'Ae Dil Hai Mushkil Title Track',
        "Aadat",
        "Aira Gaira",
        "Agar Tu Hota",
        "Tu Aake Dekhle",
        "Abhi Mujh Mein Kahin",
        "Aye Khuda",
        'Aankh Marey (From "Simmba")',
        "Apna Time Aayega",
        'Akdi Pakdi (From "Liger")',
        "Bolna",
        'Suno Chanda - Original Soundtrack',
        'Suno Chanda Season 2',
        "Bad Boy(From Saaho)",
        "Bom Diggy Diggy",
        "Bulleya",
        "Bhar Do Jholi Meri",
        "Bhula Dena",
        "Baaton Ko Teri",
        "Baadshah O Baadshah",
        "Be Intehaan",
        'Bol Bol Bol - Jhankar',
        'Bhool Bhulaiyaa 2 Title Track (From "Bhool Bhulaiyaa 2")',
        'Bande Hain Hum Uske',
        'Coka 2.0 (From "Liger")',
        'Chaiyaan Mein Saiyaan Ki',
        'Dil (From "Ek Villain Returns")',
        'Fitoor',
        'Galliyan Returns (From "Ek Villain Returns")',
        'I Love My India',
        "Jhoom (R&B MIX)",
        'Kesariya (From "Brahmastra")',
        'La Ilaaj',
        'Nain Ta Heere (From "Jugjugg Jeeyo")',
        'Raksha Bandhan - Reprise',
        'Rangisari (From "Jugjugg Jeeyo")',
        'Paracetamol',
        "Roke Na Ruke Naina",
        'Shaamat (From "Ek Villain Returns")',
        'Tum Pyaar Ho',
        'Tere Saath Hoon Main (From "Raksha Bandhan")',
        'Tur Kalleyan (From "Laal Singh Chaddha")',
        "Zara Sa (Lofi Flip)",
        'Naacho Naacho (From "Rrr")',
        'Jeeye To Jeeye Kaise - From "Saajan- Hindi"',
        'Tujh Mein Rab Dikhta Hai',
        'Kusu Kusu (From "Satyameva Jayate 2")',
        'Raataan Lambiyan (From "Shershaah")',
        'Srivalli (From "Pushpa The Rise Part - 01")',
        'Baarish Ban Jaana',
        'Lut Gaye',
        'Maiyya Mainu',
        'Khairiyat',
        'Khal Nayak Hoon Main',
        'Tujhe Dekha To',
        'Gali Gali (From "Kgf Chapter 1")',
        'Vaaste',
        'Mehabooba',
        'O Saki Saki (From "Batla House")',
        'Dil Galti Kar Baitha Hai',
        'Hookah Bar',
        'Tum Hi Aana (From "Marjaavaan")',
        'Humnava Mere',
        'Thoda Thoda Pyaar',
        'Lungi Dance (From "Lungi Dance")',
        'Muqabla (From "Street Dancer 3D")',
        "Bachpan Ka Pyaar",
        'Jugnu',
        'Filhaal2 Mohabbat',
        'Jeene Laga Hoon',
        'Samjhawan',
        'Sunn Raha Hai (From "Aashiqui 2")',
        'Dil Tod Ke',
        'Mann Bharryaa 2.0 (From "Shershaah")',
        'Dil Meri Na Sune',
        'Rait Zara Si',
        'Ranjha (From "Shershaah")',
        'Prem Ratan Dhan Payo',
        'Teri Mitti',
        'Sanam Re',
        'O Re Piya',
        'Kabira',
        'Kaun Tujhe (From "M.S.Dhoni - The Untold Story")',
        'Dilbar (From "Satyameva Jayate")',
        'Afghan Jalebi (Ya Baba)',
        'No Mercy',
        'Gunehgar',
        'Intense Love',
        'BUSY',
        'Speed Se Badho',
        'Shana Bann',
        'LOBOTOMY',
        'Bimari - B.D.S.M EP',
        'Chetavani',
        'Basti Ka Hasti',
        'Insaan',
        'Dhoondein Sitaare-Acoustic',
        'GRIND',
        'Bantai Ki Public',
        'Bad Munda',
        'Jingle Bell',
        'Amin - Tadipaar',
        'Khatam Hue Waande',
        'Mirchi',
        'Pink Venom',
        'Baby',
        'Believer',
        'Thunder',
        'On My Way',
        'Darkside',
        'Faded',
        'Bad Boy (feat. Luana Kiara)',
        'Yummy',
        'Let Me Love You',
        'Cheap Thrills',
        'Safari',
        'Bad Liar',
        'Main Pal Do Pal Ka Shair Hoon',
        'Aaj Mere Yaar Ki Shaadi Hai-From "Aadmi Sadak Ka"',
        'Tum Agar Saath Dene Ka Vada Karo',
        'Likhe Jo Khat Tujhe (From "Kanyadaan")',
        'Teri Galiyon Mein',
        'Mere Mehboob Qayamat Hogi',
        'Mere Humsafar (Original Score) [Female Version]'
    ];

    $("#tags").autocomplete({
        source: availableTags
    }, {minLength: 3});
});
// ______________________________________

$('.playPause1').addClass('playgif2');
$('.playPause2').addClass('play1');
$('.playPause2').addClass('fa-play');

$('.li1').click((e) => {
    $(e.currentTarget).addClass('li1s');

})
// songsbyyourfm
let src3 = " ";
let songname = song1.split(" ")
let joinName = songname.join("")
let name_1 = singer.text();
singer.text(name_1);

// changingImage
let lower = joinName.toLowerCase();
let static = $("#dynamicimage");
let src = static.attr("src");

src3 = src
// ***** playSongs
let audio1 = document.getElementById("audio1");

let songs = $("#songs1");
let start = true;
songs.click(function () {
    lastImgtext(song1, name_1, src);
$(".Img1").attr("src",src)
    if (start) {
        setTimeout(()=>{
            audio1.play();
    
        },1000);
        const images2 = $('.images2');
        const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
        images2.append(innerhtml2)     
        start = false;
        play1(); 
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
    } else {
        audio1.pause();
        $('.gif3').remove();
        start = true;
        play2();
        $('.lstPlay').removeClass('fa-pause');
        $('.lstPlay').addClass('fa-play');
    }

})

// keydown***

body.keydown((e)=>{
    if (e.key === " ") {
    lastImgtext(song1, name_1, src);
        // e.preventDefault();
        if ($('.lstPlay').hasClass('fa-play')) {
            $('.lstPlay').removeClass('fa-play');
            $('.lstPlay').addClass('fa-pause');
            play1();
            setTimeout(()=>{
                audio1.play();
        
            },1000)
            const images2 = $('.images2');
            const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
            images2.append(innerhtml2)     
        } else {
            audio1.pause();
            $('.lstPlay').removeClass('fa-pause');
            $('.lstPlay').addClass('fa-play');
            play2();
            $('.gif3').remove();

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
        $('.gif3').remove();

    }
})

$('.lstPlay').click((e) => {
    lastImgtext(song1, name_1, src);

    if ($('.lstPlay').hasClass('fa-play')) {
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
        play1();
        setTimeout(()=>{
            audio1.play();
    
        },1000);
        const images2 = $('.images2');
        const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
        images2.append(innerhtml2)     
    } else {
        audio1.pause();
        $('.lstPlay').removeClass('fa-pause');
        $('.lstPlay').addClass('fa-play');
       play2();
        $('.gif3').remove();

    }
})
function play1(){
    $('.playPause1').addClass('playgif2');
    $('.playPause2').addClass('play1');
    $('.playPause2').addClass('fa-pause');
    $('.playPause2').removeClass('fa-play');
}
function play2(){
    $('.playPause1').addClass('playgif2');
    $('.playPause2').addClass('play1');
    $('.playPause2').addClass('fa-play');
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

// expand
$(".images2").mouseover(()=>{
$(".span2").addClass("span3")
})
$(".images2").mouseleave(()=>{
    $(".span2").removeClass("span3")
})
$(".span1").mouseover(()=>{
    $(".span2").addClass("span3")
})
$(".span1").mouseleave(()=>{
    $(".span2").removeClass("span3")
})
// expandImg
function myFunc(){

    $(".span1").click(()=>{
        let src = $(".lastimg").attr("src");
        let exp = $(".expaImg");
        let image = `<img src= ${src}  class= Img1 alt="">` 
        exp.prepend(image);
        $(".images2").remove();
        $(".span1").remove();
        $(".span2").removeClass("span3");
        $(".span2").css("visibility",'hidden');
        
        let arrow = `<div class="arrow">
            <span class="arrow1">v</span>
        </div>` 
        exp.prepend(arrow)
        $(".arrow1").mouseover(()=>{
            $(".span4").addClass("span3");
        })
        $(".arrow1").mouseleave(()=>{
            $(".span4").removeClass("span3");
        })
        $(".arrow1").click(()=>{
            $(".arrow").css("visibility","hidden");
            $(".Img1").remove();
            if(src3=== " "){
    
                var side = `<span class="images2">
                <img src=${src} class="pngs lastimg" alt="">
                </span>`
                }else{
                var side = `<span class="images2">
                <img src=${src3} class="pngs lastimg" alt="">
                </span>` 
             }  
            
            $(".sideSong").prepend(side);
            let sidesong = `<span class="span1"></span>
            <span class="span1 mt-2 me-2"></span>`;
        
            $(".images2").after(sidesong);
            myFunc();

        })
         
        })

}
myFunc();

body.keydown((e)=>{
    if(e.key === "+"){
        e.preventDefault();
    }
})  
let ranges = document.querySelector("#range");

ranges.addEventListener("change",(e)=>{
    // let currenttime = audio1.currentTime
    let time = e.target.value;
    let duration = audio1.duration
    let time2 = (time*duration)/100;
    audio1.currentTime = time2



})

// -----------
window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
  });
  

$(document).keydown(function(event) {
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
         }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscore key
        // 61 Plus key  +/= key
    });

    $(window).bind('mousewheel DOMMouseScroll', function (event) {
           if (event.ctrlKey == true) {
           event.preventDefault();
           }
});
let word = 0;
$("#tags").click(() => {

    body.off();
    True();
    word = 1;
})
function True() {
    body.click((e) => {
        let tar = $(e.target);
        if (!tar.hasClass('fn') && word === 1) {
            body.keydown((e) => {
                if (e.key === " ") {
                    lastImgtext(song1, name_1, src);
                    // e.preventDefault();
                    if ($('.lstPlay').hasClass('fa-play')) {
                        $('.lstPlay').removeClass('fa-play');
                        $('.lstPlay').addClass('fa-pause');
                        play1();
                        setTimeout(() => {
                            audio1.play();

                        }, 1000)
                        const images2 = $('.images2');
                        const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
                        images2.append(innerhtml2)
                    } else {
                        audio1.pause();
                        $('.lstPlay').removeClass('fa-pause');
                        $('.lstPlay').addClass('fa-play');
                        play2();
                        $('.gif3').remove();

                    }

                }
                if (e.key === "m") {

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

            word = 0;
        }
    })

}
let width = window.innerWidth;

if(width < 1230){


$("#home").remove();
body.css("background-color","#fff")
body.text("Error!")



}

window.addEventListener("resize",(e)=>{
    if(window.innerWidth < 1426){
        $("#home").remove();
        body.css("background-color","#fff")
        body.text("Error!")
        
        
    
    }
    })