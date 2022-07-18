$('html, body').addClass('scroll-paused')
$('#loading-screen').css({'top': window.scrollY})
$(window).on('load', function() {
    console.log('Window Loaded');
    setTimeout(() => {
        $('html, body').removeClass('scroll-paused')
        $('#loading-screen').hide()
        //document.body.removeEventListener('touchmove', scrollDisabled, { passive: false });
    }, 2000);
});
$(document).ready(function() {
    //$('#loading-screen').hide()
    console.log('DOM ready')
    $('#hamburger').click(function() {
        $('#hamburger').toggleClass('open')
    })
});