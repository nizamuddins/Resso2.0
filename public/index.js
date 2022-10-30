const body = $("body");
// Searchform*********************************
$( ()=>{
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
        'BUSY',
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

  $( "#tags" ).autocomplete({
    source: availableTags
  },{

    minLength:3,
  }
  );
} );

// *****************
$('.li1').click((e) => {
    $(e.currentTarget).addClass('li1s');

})

const playgif = $('.plays');
const play = $('.plays2');

// let start = false;

$('.songsgif').mouseover(() => {
    // if (!start) {
    playgif.addClass('playgif');
    play.addClass('play')
    // }

})
$('.songsgif').mouseleave(() => {
    // if (!start) {
    playgif.removeClass('playgif');
    play.removeClass('play')

    // }

})
$('.plays').mouseover(() => {
    // if (!start) {
    playgif.addClass('playgif');
    play.addClass('play')

    // }

})
$('.plays2').mouseover(() => {
    // if (!start) {

    playgif.addClass('playgif');
    play.addClass('play')
    // }

})

// adingfontawesomeinsongslist

const songsList = $('.songsList')
songsList.mouseover((e) => {

    const classes = $(e.currentTarget).attr('class');
    const divide = classes
        .split(' ')
        .pop();

    $('#' + divide + 's').addClass('playgif2');

    $('#' + divide + 'sa').addClass('play1');
    $('#' + divide + 'sa').addClass('fa-play');
    setTimeout(() => {
        $('#keaars').addClass('keaar');
        $('#halkis').addClass('halki');
        $('#zaras').addClass('zara');
        $('#toofs').addClass('toof');
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

// addingPause,PlayU********************************

let start2 = false;
const songsgif = $('.songsgif')

const array = ['keaar', 'roke', 'zara', 'halki', 'toof'];

// playingsongs****************************
const audio1 = document.querySelector('#audio1');
const audio2 = document.querySelector('#audio2');
const audio3 = document.querySelector('#audio3');
const audio4 = document.querySelector('#audio4');
const audio5 = document.querySelector('#audio5');
let count = 0;

// forward***************************
$('.forward').click(() => {

    const split5 = songsgif
        .attr('class')
        .split(' ');
    const name2 = split5.pop();
    const split6 = name2
        .split('s')
        .shift();

    $('.lstPlay').removeClass('fa-play');
    $('.lstPlay').addClass('fa-pause');
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    reset();
    count = 0;
    const arr = array.lastIndexOf(split6);

    if (arr <= 3) {
        const songtoplay = array[arr + 1];

        func(songtoplay);
        playSound(songtoplay);

    } else {
        playSound(array[4])
    }

})
// backward********************************

$('.backward').click(() => {

    const split5 = songsgif
        .attr('class')
        .split(' ');
    const name2 = split5.pop();
    const split6 = name2
        .split('s')
        .shift();

    $('.lstPlay').removeClass('fa-play');
    $('.lstPlay').addClass('fa-pause');
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    reset();
    count = 0;
    const arr = array.lastIndexOf(split6);

    if (arr > 0) {
        const songtoplay = array[arr - 1];
        func(songtoplay);
        playSound(songtoplay);

    } else {
        playSound(array[0])
    }

})

// timeupdate**************************************

let array2 = [audio1, audio2, audio3, audio4, audio5];
var range = $('#range');

array2.forEach((a) => {
    a.addEventListener('timeupdate', (e) => {

        let currenttime = e.target.currentTime
        let duration = e.target.duration;
        let width = (currenttime / duration) * 100;
        range.val(width)
        changingEvery()

    })
})

function changingEvery() {
    
    if (audio1.currentTime === 172.208) {
        count = 0;
        playSound("roke");
        func("roke");

        audio1.currentTime = 0;
    } else if (audio2.currentTime === 277.904) {
        count = 0;
        playSound("zara");
        func("zara");
        audio2.currentTime = 0;

    } else if (audio3.currentTime === 211.448) {
        count = 0;
        playSound("halki");
        func("halki");
        audio3.currentTime = 0;

    } else if (audio4.currentTime === 212.610612 || audio4.currentTime ===  212.63804) {
        count = 0;
        playSound("toof");
        func("toof");
        audio4.currentTime = 0;

    } else if (audio5.currentTime === 218.174694) {
        count = 0;
        audio5.currentTime = 0;
        func1("toof");
        lstPlay();

    }
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
        audio2.muted = false;
        audio3.muted = false;
        audio4.muted = false;
        audio5.muted = false;

    }

    volume_change(change)
})
// KeyoardEvent*************************
body.keydown((e) => {
    if (e.key === " ") {
        // e.preventDefault();
        playSound(split2);
        lstPlay();

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

});
// Mute and Unmute**********************
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

// mute***************************
function mute() {
    audio1.muted = true;
    audio2.muted = true;
    audio3.muted = true;
    audio4.muted = true;
    audio5.muted = true;
    let val = document.querySelector('.smallrange');
    val.value = 0;

}
// unmute************************

function unmute() {
    audio1.muted = false;
    audio2.muted = false;
    audio3.muted = false;
    audio4.muted = false;
    audio5.muted = false;
    let val = document.querySelector('.smallrange');
    val.value = 100;
    volume_change(100 / 100)

}
function volume_change(changes) {

    audio1.volume = changes;
    audio2.volume = changes;
    audio3.volume = changes;
    audio4.volume = changes;
    audio5.volume = changes;

}

$('.songsList').click((e) => {
    count = 0;
    const split = $(e.currentTarget)
        .attr('class')
        .split(' ');
    const name = split.pop();
    const child = $(e.currentTarget).children()[1];
    const moreChilds = child.firstElementChild.textContent;
    const moreChilds2 = child.lastElementChild.textContent;
    cols1(moreChilds, moreChilds2);
    $('.lstPlay').removeClass('fa-play');
    $('.lstPlay').addClass('fa-pause');
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    reset();
    func1(name);
    playSound(name);
    changes(name);
})
// lastPlay**************************************

const split5 = songsgif
    .attr('class').split(' ');
const name2 = split5.pop();
const split6 = name2
    .split('s')
    .shift();
let split2 = split6;

function func1(name1) {
    split2 = name1
}

function func(name) {
    split2 = name;
}

play.click((e) => {

    if ($(e.target).hasClass('fa-play')) {
        play.addClass('fa-pause fs-5')
        play.removeClass('fa-play');

        playSound(split2);
        addinggif();
        lstPlay();
        start2 = false;

    } else {
        play.addClass('fa-play')
        play.removeClass('fa-pause fs-5');
        lstPlay();
        start2 = true;
        playSound(split2);
        removinggif();
    }

})

$('.lstPlay').click((e) => {
    playSound(split2);
    lstPlay();
})

const compactdisc = $('.compactdisc');

function playSound(name1) {
    if (count === 0 && name1 === 'keaar') {

        setTimeout(() => {
            audio1.play();
            let RB = $('#song1').text();
            let singer = $('#singer1').text();
            cols1(RB, singer);
            compactdisc.addClass('fa');
            count = 1;
        }, 100)
    } else if (count === 0 && name1 === 'roke') {
        setTimeout(() => {
            audio2.play();
            let RB = $('#song2').text();
            let singer = $('#singer2').text();
            cols1(RB, singer)
            compactdisc.addClass('fa');
            count = 1;

        }, 100)

    } else if (count === 0 && name1 === 'zara') {
        setTimeout(() => {
            audio3.play();
            let RB = $('#song3').text();
            let singer = $('#singer3').text();
            cols1(RB, singer)
            compactdisc.addClass('fa');
            count = 1;

        }, 100)

    } else if (count === 0 && name1 === 'halki') {
        setTimeout(() => {
            audio4.play();
            let RB = $('#song4').text();
            let singer = $('#singer4').text();
            cols1(RB, singer)
            compactdisc.addClass('fa');
            count = 1;

        }, 100)
    } else if (count === 0 && name1 === 'toof') {
        setTimeout(() => {
            compactdisc.addClass('fa');
            audio5.play();
            let RB = $('#song5').text();
            let singer = $('#singer5').text();
            cols1(RB, singer)
            count = 1;

        }, 100)

    } else if (count === 1) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        count = 0;
    }

    addinggif();
    changes(name1);

}

// pauseSound ****** */ changinImgs******************

const lstImg = $('.lastimg');

function changes(names) {
    const split = songsgif
        .attr('class')
        .split(' ')[1];
    songsgif.removeClass(split)
    songsgif.addClass(names + 's');

    // lastimg

    lstImg.attr('src', `images/${names}.jpg `)
    // backgroundImg

    $('.fix1').attr('id', names);
    // lastgif
    const images2 = $('.images2');
    const innerhtml2 = `<img src="images/gif.gif" class="gif3">`
    if (play.hasClass('fa-pause')) {
        images2.append(innerhtml2)

    } else {
        $('.gif3').remove();
    }

}
// addinggif*********************************
function addinggif() {

    play.addClass('fa-pause fs-5');
    play.removeClass('fa-play');

    const cols1 = $('.cols1');
    const innerhtml = `<span class=" gif   p-0">
<img src="images/gif.gif" class="gif2"></span>`;

    cols1.append(innerhtml);
    playgif.css('visibility', 'hidden');

    songsgif.mouseover(() => {
        playgif.css('visibility', 'visible');
        $('.gif').remove();

    })

    songsgif.mouseleave(() => {
        if (!start2) {
            cols1.append(innerhtml);
            playgif.css('visibility', 'hidden');
            $('.gif')
                .next()
                .remove();

        }
    })
    playgif.mouseover(() => {
        playgif.css('visibility', 'visible');

        $('.gif').remove();
    })
}

// changingNames*****************************

function cols1(name1, name2) {
    const songName1 = $('.songName1');
    const songName2 = $('.songName2');
    const musicName = $('.musicName');
    const singers = $('.singers');

    songName1.text(name1);
    songName2.text(name2);

    musicName.text(name1);
    singers.text(name2);

}

// lstPlayfunc*********************************
function lstPlay() {
    if ($('.lstPlay').hasClass('fa-play')) {
        $('.lstPlay').removeClass('fa-play');
        $('.lstPlay').addClass('fa-pause');
        start2 = false;
    } else {
        $('.lstPlay').removeClass('fa-pause');
        $('.lstPlay').addClass('fa-play');
        removinggif();
    }

}
// removinggif******************************
function removinggif() {

    play.addClass('fa-play');
    play.removeClass('fa-pause fs-5');
    start2 = true;
    $('.gif').remove();
    $('.gif3').remove();
    compactdisc.removeClass('fa');
}

// reset*****************************************

let reset = function () {
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0;
    audio4.currentTime = 0;
    audio5.currentTime = 0;
}
body.keydown((e)=>{
    if(e.key ===  "+"){
        e.preventDefault();
    }
})

let ranges = document.querySelector("#range");



ranges.addEventListener("change",(e)=>{
    // let currenttime = audio1.currentTime
    let time = e.target.value;
  
    if (split2 === 'keaar') {
            let duration = audio1.duration
            let time2 = (time*duration)/100;
            audio1.currentTime = time2;
    } else if (split2 === 'roke') {
            let duration = audio2.duration
            let time2 = (time*duration)/100;
            audio2.currentTime = time2;
    } else if (split2 === 'zara') {
            let duration = audio3.duration
            let time2 = (time*duration)/100;
            audio3.currentTime = time2;
    } else if (split2 === 'halki') {
            let duration = audio4.duration
            let time2 = (time*duration)/100;
            audio4.currentTime = time2;
    } else if (split2 === 'toof') {
            let duration = audio5.duration
            let time2 = (time*duration)/100;
            audio5.currentTime = time2;
    }
})

// ------------
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

// -------------
let word = 0;

$("#tags").click(()=>{

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
                    // e.preventDefault();
                    playSound(split2);
                    lstPlay();

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

            });
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
// ____________________________________________________________________