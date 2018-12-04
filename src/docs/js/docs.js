(function($) {
	"use strict";

    window.path = '../dist/plugins';

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

    Holder.addTheme('ya', {bg: '#ededed', fg: '#ededed'}).run();

    hljs.initHighlightingOnLoad();

    function setTooltip(btn, message) {
        $(btn).attr('data-original-title', message).tooltip('show');
    }

    function hideTooltip(btn) {
        setTimeout(function() {
            $(btn).tooltip('hide');
        }, 2000);
    }

    var clipboard = new ClipboardJS('.btn', {
        text: function(trigger) {
            return $(trigger.getAttribute('rel')).text();
        }
    });

    clipboard.on('success', function(e) {
        e.clearSelection();
        setTooltip(e.trigger, 'Copied!');
        hideTooltip(e.trigger);
    });
})(window.jQuery);
