$(document).ready(function () {

    function setArrow() {
        var heroOffset = $('.hero-text').offset();
        $('.arrow').css({
            'top': heroOffset.top + $('.hero-text').height() + 125 + 'px'
        });
    }
    setArrow();
    $(window).resize(setArrow);

    
    
    $('.first-triangle').animate({
        top: 0
    }, 800);

    $('.second-triangle').animate({
        top: 250
    }, 800, function () {
        $('.phone').animate({
            top: 60
        }, 600);
        $('.phone-shadow4').animate({
            top: 85
        }, 650);
        $('.phone-shadow').animate({
            top: 60
        }, 700);
        $('.phone-shadow2').animate({
            top: 30
        }, 800);
        $('.phone-shadow3').animate({
            top: 0
        }, 900);
        $('.first-triangle').animate({
            top: -10
        }, 250);
        $('.second-triangle').animate({
            top: 260
        }, 250, function () {
            $('.first-triangle').animate({
                top: 0
            }, 150);
            $('.second-triangle').animate({
                top: 220
            }, 150);
            $('.watch').animate({
//                top: 280
                right: 150
            }, 900);
            $('.watch2').animate({
//                top: 335
                right: 355
            }, 1000);
            $('.watch3').animate({
//                top: 350
                right: 375
            }, 1100, function () {
                $('.home').animate({
                    opacity: 1
                }, 600);
                $('.arrow').animate({
                    opacity: 1
                }, 600);
            });
        });
    });

    $(".down-scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});