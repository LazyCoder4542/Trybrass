//document.body.addEventListener('touchmove', scrollDisabled, { passive: false });
function scrollDisabled(e) { e.preventDefault(); }
$(window).on('load', function() {
    console.log('Window Loaded');
    setTimeout(() => {
        //$('#loading-screen').hide()
        document.body.removeEventListener('touchmove', scrollDisabled, { passive: false });
    }, 2000);
    
    //$(document.body).removeClass('scroll-paused')
});
$(document).ready(function() {
    console.log('DOM ready')
    $('#hamburger').click(function() {
        $('#hamburger').toggleClass('open')
    })
});