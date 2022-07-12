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

play.click((e) => {
    start = true;
  
    if ($(e.target).hasClass('fa-play')) {
        play.addClass('fa-pause fs-5')
        play.removeClass('fa-play')
    }
    else{
        play.addClass('fa-play')
        play.removeClass('fa-pause fs-5')

    }
})