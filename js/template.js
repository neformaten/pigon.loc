$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});

if($('#companyVideo').length > 0){
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('companyVideo', {
            height: '360',
            width: '640',
            videoId: 'h2Toze_2mps',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }
    $('.video-btn').on('click', function () {
        $('.mission-wrap').fadeOut();
        $('#companyVideo').fadeIn();
        $('.video-close').show();
        player.playVideo();
    });
    $('.video-close').on('click', function () {
        $('.mission-wrap').fadeIn();
        $('#companyVideo').fadeOut();
        $('.video-close').hide();
        player.pauseVideo();
    });
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.mission-wrap').fadeIn();
            $('#companyVideo').fadeOut();
            $('.video-close').hide();
        }
    }
}

function tabs(tags) {
    tags.each(function() {
        var currTabs = $(this);
        currTabs.find('.js-tabs-item').first().addClass('active');
        currTabs.find('.js-tabs-item.active').next('li:not(.active)').addClass('afterCurrent');
        currTabs.find('.js-tabs-item.active').prev('li:not(.active)').addClass('beforeCurrent');
        currTabs.children('.js-tabs-item-content').first().addClass('active').show();
        currTabs.on('click', '.js-tabs-item:not(.active)', function() {
            $(this).addClass('active');
            currTabs.find('.js-tabs-item').removeClass('afterCurrent').removeClass('beforeCurrent');
            currTabs.find('.js-tabs-item').not(this).removeClass('active');
            $(this).next('li:not(.active)').addClass('afterCurrent');
            $(this).prev('li:not(.active)').addClass('beforeCurrent');
            currTabs.find('.js-tabs-item-content').removeClass('active').hide('slow');
            currTabs.find('.js-tabs-item-content').eq($(this).index()).addClass('active').show('slow');
        });
    });
}

$(document).ready(function () {

    if ($('.slideshow').length > 0) {
        $('.slideshow').slick({
            arrows: true,
            autoplay: true,
            fade: true,
            dots: false
        });
    }
    if ($('.reasons').length > 0) {
        $('.reasons').slick({
            arrows: true,
            autoplay: false,
            fade: true,
            dots: false
        });
    }
    if ($('.maingallery').length > 0) {
        $('.maingallery').slick({
            arrows: true,
            autoplay: false,
            fade: true,
            dots: false
        });
    }

    if ($('.js-tabs').length > 0) {
        tabs($('.js-tabs'));
    }
    /*
    $('ul.windows-tabs li.current').next('li:not(.current)').addClass('afterCurrent');
    $('ul.windows-tabs li.current').prev('li:not(.current)').addClass('beforeCurrent');
    $('ul.windows-tabs').on('click', 'li:not(.current)', function() {
        $(this).addClass('current').siblings().removeClass('current').parents('ul').next('.windows-tabs-content').children('.windows-content-item').eq(jQuery(this).index()).fadeIn(150).siblings('.windows-content-item').hide();
        $('ul.windows-tabs li').removeClass('afterCurrent').removeClass('beforeCurrent');
        $('ul.windows-tabs li.current').next('li:not(.current)').addClass('afterCurrent');
        $('ul.windows-tabs li.current').prev('li:not(.current)').addClass('beforeCurrent');
    });
    */
    $('.reviews-item-more').on('click', function () {
        $(this).toggleClass('on').toggleText('Развернуть', 'Свернуть').prev('.expanding').toggle('slow');
    });

    $('input[type=checkbox]').addClass('checkbox');
    $('input[type=radio]').addClass('radio');
    $('input[type=file]').addClass('file');
    $('input[type=submit]').addClass('submit');
    $('[disabled=disabled]').addClass('disabled');
    $('[selected=selected]').addClass('selected');
    $('table').find('tr:odd').addClass('odd');
    $('table').find('tr:even').addClass('even');
    $('table').find('tr:first-child').addClass('first');
    $('table').find('tr:last-child').addClass('last');
    $('table tr').find('td:first-child').addClass('first');
    $('table tr').find('td:last-child').addClass('last');
    $('ul').find('li:first-child').addClass('first');
    $('ul').find('li:last-child').addClass('last');
    $('ul').find('li:odd').addClass('odd');
    $('ul').find('li:even').addClass('even');

});