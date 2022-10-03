
let body = $("body");
// browse
let singer = $("#singer").text();
let song1 = $("#song").text();



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
        "Tu Aake Dekhle",
        "Abhi Mujh Mein Kahin",
        "Ae Khuda",
        "Allah Duhai Hai ",
        "Aankh Marey",
        "Apna Time Aayega",
        'Akdi Pakdi (From "Liger")',
        "Bolna",
        "Bad Boy(From Saaho)",
        "Bom Diggy Diggy",
        "Bulleya",
        "Tun Aake Dekhle",
        "Bhar Do Jholi Meri",
        "Bhula Dena",
        "Baaton Ko Teri",
        "Baadshah O Baadshah",
        "Boss (Title Song)",
        "Be Intehaan",
        'Bol Bol Bol - Jhankar',
        'Bhool Bhulaiyaa 2 Title Track (From "Bhool Bhulaiyaa 2")',
        "Bande Hain Hum",
        'Coka 2.0 (From "Liger")',
        'Chaiyaan Mein Saiyaan Ki',
        'Chhora Ganwar',
        'Deva Deva (From "Brahmastra")',
        'Dil (From "Ek Villain Returns")',
        'Dil (Shreya’s Version) [From "Ek Villain Returns"]',
        'Fitoor',
        'Galliyan Returns (From "Ek Villain Returns")',
        'I Love My India',
        "Jhoom (R&B MIX)",
        'Kesariya (From "Brahmastra")',
        'La Ilaaj',
        'Nain Ta Heere (From "Jugjugg Jeeyo")',
        'Raksha Bandhan - Reprise',
        'Rangisari (From "Jugjugg Jeeyo")',
        'Rubaru',
        'Paracetamol',
        "Roke Na Ruke Naina",
        'Shaamat (From "Ek Villain Returns")',
        'Something in the Orange',
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

$('.li1').click((e) => {
    $(e.currentTarget).addClass('li1s');

})

let audio1 = document.getElementById("gaana")

// ***** playSongs
let src3 = " ";
var range = $('#range');
let songs = $(".fm1");
let start = true;
let source = "hdf";
songs.click(function (e) {
    let temp1 = e.currentTarget;
    let sibling = temp1.nextElementSibling;
    let val1 = temp1.textContent;
    let val2 = sibling.textContent;
    let img = temp1.parentNode.previousElementSibling.childNodes[1];
    let src = img.getAttribute("src");
    lastImgtext(val1, val2, src);
    $(".Img1").attr("src" ,src);
    src3 = src;
// audio
    let songname = val1.split(" ");
    let joinName = songname.join("");
    let lower = joinName.toLowerCase();
    var new_string = lower.split('"');
    let joinName2 = new_string.join("");
    let hyphensRemoved = joinName2.replaceAll('-', '')
    let src2 = "songs/"+hyphensRemoved+".mp3";
    if(src2 !== source ){
        audio1.setAttribute("src",src2);
        source = src2;
        start = true;

    }  

    if (start === true) {
        setTimeout(()=>{
            audio1.play();
        },1000);
        const images2 = $('.images2');
        const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
        images2.append(innerhtml2)     
        start = false;
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
    } else {
        $('.gif3').remove();
        audio1.pause();
        start = true;
        $('.lstPlay').removeClass('fa-pause');
        $('.lstPlay').addClass('fa-play');
    }
})

// keydown***

body.keydown((e)=>{
  
    if (e.key === " ") {
        // e.preventDefault();
        if ($('.lstPlay').hasClass('fa-play')) {
            $('.lstPlay').removeClass('fa-play');
            $('.lstPlay').addClass('fa-pause');

        setTimeout(()=>{
                audio1.play();
                start = false;
            },1000);
            const images2 = $('.images2');
            const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
            images2.append(innerhtml2)     
        }     
         else {
            audio1.pause();
            $('.lstPlay').removeClass('fa-pause');
            $('.lstPlay').addClass('fa-play');
            start =true;
            $('.gif3').remove();

        }

    } if (e.key === "m") {

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

// // range******

audio1.addEventListener("timeupdate", (e) => {

        let currenttime = e.currentTarget.currentTime
        let duration = e.currentTarget.duration;
        let width = (currenttime / duration) * 100;
        if(isNaN(width)){
            console.log("NAN")
        }else{
            range.val(width);

        }
        if (range.val() == 100) {
            $('.lstPlay').addClass('fa-play');
            $('.lstPlay').removeClass('fa-pause');
            start = true;
            $('.gif3').remove();

        }
 
})

$('.lstPlay').click((e) => {

    if ($('.lstPlay').hasClass('fa-play')) {
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
        setTimeout(()=>{
            audio1.play();
    
        },2000)
        const images2 = $('.images2');
        const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
        images2.append(innerhtml2)     
    } else {
        audio1.pause();
        $('.lstPlay').removeClass('fa-pause');
        $('.lstPlay').addClass('fa-play');
        $('.gif3').remove();

    }
})

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
    if(e.key ===  "+"){
        e.preventDefault();
    }
})  