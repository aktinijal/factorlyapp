$(document).ready(function () {
    $('.first-triangle').animate({
        top: 0
    }, 800);

    $('.second-triangle').animate({
        top: 250
    }, 800, function () {
        //            $('body').css('background-color', '#cfdee8');
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
                top: 280
            }, 900);
            $('.watch2').animate({
                top: 335
            }, 1000);
            $('.watch3').animate({
                top: 350
            }, 1100, function () {
                $('.arrow').animate({
                    top: 940
                }, 800, function () {
                    $('.home').animate({
                        opacity: 1
                    }, 600);
                    $('.arrow').animate({
                        top: 900
                    }, 300, function () {
                        $('.arrow').animate({
                            top: 940
                        }, 300, function () {
                            $('.arrow').animate({
                                top: 920
                            }, 150, function () {
                                $('.arrow').animate({
                                    top: 940
                                }, 150, function () {




                                    //                                    $('.home').css({visibility:'visible'});
                                });
                            });
                        });
                    });
                });
            });
        });
    });
/****************************************************/
    var x = false;
    some = function() {
        $('.request').css({'background-color': '#fff'});
        $('.request').css({'color': '#111'});
        $('.request').css({'box-shadow': 'none'});
        $('.footer-bg2').animate({opacity: 1}, 700, function() {
            $('.request').css({'background-color': '#111'});
            $('.request').css({'color': '#fff'});
            $('.request').css({'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'});
            $('.footer-bg2').animate({opacity: 0}, 50, function() {
                $('.request').css({'background-color': '#fff'});
                $('.request').css({'color': '#111'});
                $('.request').css({'box-shadow': 'none'});
                $('.footer-bg2').animate({opacity: 1}, 300, function() {
                    $('.request').css({'background-color': '#111'});
                    $('.request').css({'color': '#fff'});
                    $('.request').css({'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'});
                    $('.footer-bg2').animate({opacity: 0}, 30, function() {
                        $('.request').css({'background-color': '#fff'});
                        $('.request').css({'color': '#111'});
                        $('.request').css({'box-shadow': 'none'});
                        $('.footer-bg2').animate({opacity: 1}, 100, function() {
                            $('.request').css({'background-color': '#111'});
                            $('.request').css({'color': '#fff'});
                            $('.request').css({'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'});
                            $('.footer-bg2').animate({opacity: 0}, 20, function() {
                                $('.request').css({'background-color': '#fff'});
                                $('.request').css({'color': '#111'});
                                $('.request').css({'box-shadow': 'none'});
                                $('.footer-bg2').animate({opacity: 1}, 10);
                            });
                        });
                    });
                });
            });
        });
        
    }
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var scrollBottom = $(window).scrollTop() - $('.home').height();
        if(scrollBottom >= -1000 && x == false) {
           some();
            x = true;
        }
        if(scrollBottom <= -1500) {
            x = false;
            $('.footer-bg2').animate({opacity: 0}, 10)
            $('.request').css({'background-color': '#111'});
            $('.request').css({'color': '#fff'});
            $('.request').css({'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'});
        }
    });
    

        $('.zoom-face').hover(function(){
            $(this).find('.text > p').animate({
                opacity : '1'
            }, 300);
            $(this).find('.face > img').animate({
                width : '105%',
                left: '-2.5%'
                
            }, 300);
        });
        $('.zoom-face').mouseleave(function(){
            $(this).find('.text > p').animate({
                opacity : '0'
            }, 300);
            $(this).find('.face > img').animate({
                width : '100%',
//                left: -0
                
            }, 100);
        });
    
    
    
    
    

/********************Modal***************************/
    $('.request').click(function () {
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({
                        opacity: 1
                    }, 200);
            });
    });

    $('#modal_close, #overlay').click(function () {
        $('#modal_form')
            .animate({
                    opacity: 0
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    /******************Background***********************/
    $(window).resize(function () {

    });

    /*******************Expertize**********************/
    var expertizeItemHeight = $(".app").height();
    $(".learn-div").height(expertizeItemHeight);
    $(".idea").height(expertizeItemHeight);
    $(window).resize(function () {
        var expertizeItemHeight = $(".app").height();
        $(".learn-div").height(expertizeItemHeight);
        $(".idea").height(expertizeItemHeight);
    });

    /********************Slick************************/
    var $status = $('.pagingInfo');
    var $slickElement = $('.cases-slick');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text("Case " + i + ' of ' + slick.slideCount);
    });

    $slickElement.slick({});

$('.cases-slick > button').addClass('littleSlick');
    var $statusProduct = $('.productPagingInfo');
    var $slickProduct = $('.products-slick');

    $slickProduct.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $statusProduct.text("Case " + i + ' of ' + slick.slideCount);
    });

    $slickProduct.slick({});

    
    /***********************ABOUT.html******************/
//    $('.faces-item').click(function(){
//        $('.face').css('zoom', '3');
//    });


});