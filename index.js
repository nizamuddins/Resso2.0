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

let start = false;

$('.songsgif').mouseover(() => {
    if (!start) {
        playgif.addClass('playgif');
        play.addClass('play')
    }

})
$('.songsgif').mouseleave(() => {
    if (!start) {
        playgif.removeClass('playgif');
        play.removeClass('play')

    }

})
$('.plays').mouseover(() => {
    if (!start) {
        playgif.addClass('playgif');
        play.addClass('play')

    }

})
$('.plays2').mouseover(() => {
    if (!start) {

        playgif.addClass('playgif');
        play.addClass('play')
    }

})

const songsgif = $('.songsgif')

play.click((e) => {
    start = true;

    if ($(e.target).hasClass('fa-play')) {
        play.addClass('fa-pause fs-5')
        play.removeClass('fa-play');
        const split = songsgif
            .attr('class')
            .split(' ');
        const name = split.pop();
        const split2 = name
            .split('s')
            .shift();
        playSound(split2);
    } else {
        play.addClass('fa-play')
        play.removeClass('fa-pause fs-5')

    }

})

// playingsongs************

$('.songsList').click((e) => {
    const split = $(e.target)
        .attr('class')
        .split(' ');
    const name = split.pop();
    playSound(name)
    changes(name);

})

function playSound(name1) {
    const audio = new Audio('songs/' + name1 + '.mp3');
    audio.play();
changes(name1)
}

//****** */ changinImgs
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
// addinggif
    playgif.css('visibility','hidden')
const cols1 = $('.cols1');
const innerhtml =   `<span class=" gif plays  p-0">
<img src="images/gif.gif" class="gif2">
</span>`
cols1.append(innerhtml)
}


