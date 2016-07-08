$(document).ready(function () {

    function setArrows() {
        var slickImgOffset = $('.slickBig-img').offset();
        $('.sliderBig.slick-prev , .cases-slick .slick-prev.red').css({
            'left': slickImgOffset.left + $('.slickBig-img').width() - 100 + 'px'
        });
        
        $('.sliderBig.slick-next , .cases-slick .slick-next.red').css({
            'left': slickImgOffset.left + $('.slickBig-img').width() - 75 + 'px'
        });
        $('.pagingInfoBlock.casesPaging').css({
            'left': slickImgOffset.left + $('.slickBig-img').width() - 325 + 'px'
        });
        
        $('.sliderBig.slick-prev').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + 100 + 'px'
        });
        $('.pagingInfoBlock.casesPaging.black').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + 90 + 'px'
        });

        $('.sliderBig.slick-next').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + 140 + 'px'
        });
    }
    
    setArrows();
    $(window).resize(setArrows);
    
    
    function setCaseHei() {
        var slickTrackHei = $('.slick-track').height();
        $('.cases').height(slickTrackHei);
    }
    
    setCaseHei();
    $(window).resize(setCaseHei);

});