const body = $("body");

$('.li1').click((e) => {

    $(e.currentTarget).addClass('li1s');

    const next = $(e.currentTarget).next();
    const next2 = $(e.currentTarget)
        .next()
        .next();

    const prev = $(e.currentTarget).prev();
    const prev2 = $(e.currentTarget)
        .prev()
        .prev();

    next.removeClass('li1s');
    next2.removeClass('li1s')
    prev.removeClass('li1s');
    prev2.removeClass('li1s');

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

// addingPause,Play

let start2 = false;
const songsgif = $('.songsgif')

const array = ['jhoom', 'roke', 'zara', 'ajab', 'remix'];

// playingsongs************
const audio1 = document.querySelector('#audio1');
const audio2 = document.querySelector('#audio2');
const audio3 = document.querySelector('#audio3');
const audio4 = document.querySelector('#audio4');
const audio5 = document.querySelector('#audio5');
let count = 0;
// forward******
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
    count = 0;
    const arr = array.lastIndexOf(split6);

    if (arr <= 3) {
        const songtoplay = array[arr + 1];
        // const class2 = $('.songsgif').attr('class'); const splitting = class2
        // .split(' ')     .pop();
        func(songtoplay);

        // $('.songsgif').removeClass(splitting); $('.songsgif').addClass(songtoplay)
        playSound(songtoplay);

    } else {
        playSound(array[4])
    }

})
// backward****

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

$('.smallrange').change(() => {
    let change = +($('.smallrange').val())
    change = ((change) / 100).toFixed(1);

    if (change === 0.0) {
        mute()
    }else {
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
// KeyboardEvent
body.keydown((e) => {
    if (e.key === " ") {
        playSound(split2);
        lstPlay();

    }
    if (e.key === "m") {
        e.preventDefault();

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
    audio2.muted = true;
    audio3.muted = true;
    audio4.muted = true;
    audio5.muted = true;
    let val = document.querySelector('.smallrange');
    val.value = 0;


}
// unmute

function unmute() {
    audio1.muted = false;
    audio2.muted = false;
    audio3.muted = false;
    audio4.muted = false;
    audio5.muted = false;
    let val = document.querySelector('.smallrange');
    val.value = 100;
    volume_change(100/100)

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
    func1(name);
    playSound(name);
    changes(name);
})
// lastPlay

const split5 = songsgif
    .attr('class')
    .split(' ');
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
    if (count === 0 && name1 === 'jhoom') {
        setTimeout(() => {
            audio1.play();
            compactdisc.addClass('fa');
            count = 1;
        }, 100)
    } else if (count === 0 && name1 === 'roke') {
        setTimeout(() => {
            audio2.play();
            compactdisc.addClass('fa');
            count = 1;
        }, 100)

    } else if (count === 0 && name1 === 'zara') {
        setTimeout(() => {
            audio3.play();
            compactdisc.addClass('fa');
            count = 1;
        }, 100)

    } else if (count === 0 && name1 === 'ajab') {
        setTimeout(() => {
            audio4.play();
            compactdisc.addClass('fa');
            count = 1;
        }, 100)
    } else if (count === 0 && name1 === 'remix') {
        setTimeout(() => {
            compactdisc.addClass('fa');
            audio5.play();
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

// pauseSound ****** */ changinImgs
const lstImg = $('.lastimg');

function changes(names) {
    const split = songsgif
        .attr('class')
        .split(' ')[1];
    songsgif.removeClass(split)
    songsgif.addClass(names + 's')

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
// addinggif
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

// changingNames**

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

// lstPlayfunc
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
// removinggif
function removinggif() {

    play.addClass('fa-play');
    play.removeClass('fa-pause fs-5');
    start2 = true;
    $('.gif').remove();
    $('.gif3').remove();
    compactdisc.removeClass('fa');
}