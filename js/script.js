'use strict';

$('.js--scroll-forward').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
});