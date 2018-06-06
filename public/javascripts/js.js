// Generated by CoffeeScript 1.6.3
(function() {
    $(function() {
        $('.navbar').localScroll({
            hash: true
        });
        $(window).resize(function() {
            return $(".resize-page").css("min-height", $(window).height() - 100 + "px");
        }).resize();
        $(".contact-us").click(function() {
            if (!$("#contact").hasClass("open")) {
                $("#contact").addClass("opening").addClass("open");
                return setTimeout(function() {
                    return $("#contact").removeClass("opening");
                }, 1000);
            }
        });
        $("#contact .close-contact").click(function() {
            $("#contact").addClass("closing").removeClass("open");
            return setTimeout(function() {
                return $("#contact").removeClass("closing");
            }, 1000);
        });
        $(".logo").animate({
            "margin-top": "-180px",
            width: "960px",
            easing: 'easein'
        }, 1000);
        setTimeout(function() {
            $(".slogan").show().addClass("sloganimate");
            $(".logo").animate({
                opacity: 0.2
            }, 1000);
            return setTimeout(function() {
                return $('.page,#footer').css({
                    visibility: 'visible'
                });
            }, 1000);
        }, 1000);
        return skrollrPages();
        /*
          onpage:
            'credits': (opts)->
              $(opts.scroll_down_el).hide()
              $(opts.scroll_top_el).show()
          offpage:
            'credits': (opts)->
              $(opts.scroll_down_el).show()
              $(opts.scroll_top_el).hide()
        */

    });

}).call(this);
