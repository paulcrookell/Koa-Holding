/*
 * Avoid `console` errors in browsers that lack a console.
 */
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
 * Placeholder support for unsupporting browsers
 */
(function () {
    if (!Modernizr.input.placeholder) {
        $("[placeholder]").focus(function () {
            var e = $(this);
            if (e.val() == e.attr("placeholder")) {
                e.val("");
                e.removeClass("placeholder")
            }
        }).blur(function () {
            var e = $(this);
            if (e.val() == "" || e.val() == e.attr("placeholder")) {
                e.addClass("placeholder");
                e.val(e.attr("placeholder"))
            }
        }).blur();
        $("[placeholder]").parents("form").submit(function () {
            $(this).find("[placeholder]").each(function () {
                var e = $(this);
                if (e.val() == e.attr("placeholder")) {
                    e.val("")
                }
            })
        })
    }
})();