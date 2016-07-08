$(document).ready(function () {
    function setContactPadding() {
        var homeHeight = $('#home').height();
        homeHeight *= 0.10;
        $('.contacts').css({
            'padding-top': homeHeight + 'px'
        });
    }
    setContactPadding();
    $(window).resize(setContactPadding);
});