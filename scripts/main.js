$('html, body').addClass('scroll-paused')
$(window).on('load', function() {
    console.log('Window Loaded');
    $('html, body').removeClass('scroll-paused')
    $('#loading-screen').hide()
    /*setTimeout(() => {
        //document.body.removeEventListener('touchmove', scrollDisabled, { passive: false });
    }, 2000);*/
});
$(document).ready(function() {
    console.log('DOM ready')
    $('#hamburger').click(function() {
        $('#hamburger').toggleClass('open')
    })
});




