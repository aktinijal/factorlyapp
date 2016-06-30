$(document).ready(function () {
        $('.first-triangle').animate({top : 0}, 800);

        $('.second-triangle').animate({top : 250}, 800, function(){
            $('.phone').animate({top : 60}, 600);
            $('.phone-shadow4').animate({top : 85}, 650);
            $('.phone-shadow').animate({top : 60}, 700);
            $('.phone-shadow2').animate({top : 30}, 800);
            $('.phone-shadow3').animate({top : 0}, 900);
            $('.first-triangle').animate({top : -10}, 250);
            $('.second-triangle').animate({top : 260}, 250, function(){
                $('.first-triangle').animate({top : 0}, 150);
                $('.second-triangle').animate({top : 220}, 150);
                $('.watch').animate({top : 280}, 900);
                $('.watch2').animate({top : 335}, 1000);
                $('.watch3').animate({top : 350}, 1100, function() {
                    $('.arrow').animate({top : 1000}, 800, function() {
                        $('.arrow').animate({top : 950}, 300, function() {
                            $('.arrow').animate({top : 1000}, 300, function() {
                                $('.arrow').animate({top : 975}, 150, function() {
                                    $('.arrow').animate({top : 1000}, 150, function(){
                                        

                                    $('.home').animate({opacity : 1}, 700);
                                            
                                        //                                    $('.home').css({visibility:'visible'});
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });


    /******************Background***********************/
    $(window).resize(function () {

    });
//    var width = $(window).width();
//
//    $('.triangle-top').css("borderLeftWidth", width);
//    $('.triangle-bottom').css("borderRightWidth", width);
//    $('.triangle-footer').css("borderLeftWidth", width);
//    $('footer').width($(".wrapper").width() - 180);
//
//    $(window).resize(function () {
//        var width = $(window).width();
//        $('.triangle-top').css("borderLeftWidth", width);
//        $('.triangle-bottom').css("borderRightWidth", width);
//        $('.triangle-footer').css("borderLeftWidth", width);
//        $('footer').width($(".wrapper").width() - 180);
//    });
//        
//    var heroHeight = $(".hero").height();
//    var expertizeHeight = $(".expertize").height();
//    var caseHeight = $(".case").height();
//    var principleHeight = $(".principle").height();
//    var rectangleHeight = expertizeHeight+caseHeight+principleHeight;
//    $(".rectangle").height(rectangleHeight);
//    
//    $(window).resize(function(){
//        var heroHeight = $(".hero").height();
//        var expertizeHeight = $(".expertize").height();
//        var caseHeight = $(".case").height();
//        var principleHeight = $(".principle").height();
//        var rectangleHeight = expertizeHeight+caseHeight+principleHeight;
//        $(".rectangle").height(rectangleHeight);
//        
//        $('.wrapper').height($(".background").height());
//    });
//   
//    $('.wrapper').height($(".background").height());



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


    var $statusProduct = $('.productPagingInfo');
    var $slickProduct = $('.products-slick');

    $slickProduct.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $statusProduct.text("Case " + i + ' of ' + slick.slideCount);
    });

    $slickProduct.slick({});



});