(function($) {
	"use strict";

    $('.nav-link').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        var num = 500;

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, num);
        }
    });

})(window.jQuery);
