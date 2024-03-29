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
        $('#menu .menu-dropdown').toggle()
    })
    $(function () {
        function desktopView(x) {
            if (x.matches) {
                $('#site-footer .links ul').removeClass('dropdown')
                $('#site-footer .links ul').addClass('temp')
            }
            else {
                $('#site-footer .links ul').addClass('dropdown')
                $('#site-footer .links ul').removeClass('temp')
            }
        }
        var mq1 = window.matchMedia("(min-width: 1024px)");
        desktopView(mq1);
        mq1.addListener(desktopView);
    });
});
var obj = $('#support-team div:first')
var obj2 = obj.siblings()
$(window).scroll(function() {
    if (window.innerWidth < 768) {
        var objB2 = obj2.get(0).getBoundingClientRect();
        if (objB2.top <= 80+ obj.innerHeight() && objB2.bottom >= 80+ obj.innerHeight()) {
            obj.css({'position': 'fixed', 'top': '80px', 'right': '0'})
            obj2.css({'margin-top': `${obj.innerHeight()}px`})
        }
        else if(objB2.top > 80+ obj.innerHeight()) {
            obj.css({'position': 'static'})
            obj2.css({'margin-top': '0'})
        }
        else if(objB2.bottom < 80+ obj.innerHeight()) {
            obj.css({'position': 'relative', 'top': `${obj2.innerHeight()}px`})
            obj2.css({'margin-top': '0'})
        }
    }
});