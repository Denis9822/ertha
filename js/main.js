$('.header_lang_active').click(function() {
    $('.header_lang_select').toggle();
    $('.header_lang_active img').toggleClass('img_rotate');
})

$('.trailer').click(function() {
    $('.player_video').toggle();
    $('#vid')[0].play();
})

$('.player_video_close').click(function() {
    $('.player_video').toggle();
    $('#vid')[0].pause();
})