// Generated by CoffeeScript 1.6.1
(function() {

  $.fn.screenOffset = function() {
    var offs;
    offs = $(this).offset();
    return {
      top: offs.top - $(window).scrollTop(),
      left: offs.left
    };
  };

  $(".resize-page").css("min-height", $(window).height() + "px");

  $(function() {
    $('.navbar').localScroll({
      hash: true
    });
    $(".carousel").carousel();
    $(".parallax-layer").parallax({
      mouseport: $(".parallax-viewport")
    });
    $(window).resize(function() {
      return $(".resize-page").css("min-height", $(window).height() + "px");
    }).resize();
    $(".contact-us").click(function() {
      return $("#contact").addClass("open");
    });
    $("#contact .close-contact").click(function() {
      return $("#contact").removeClass("open");
    });
    $(".logo").animate({
      "margin-top": "-240px",
      width: "960px",
      easing: 'easein'
    }, 1000);
    setTimeout(function() {
      return $(".slogan").show().addClass("sloganimate");
    }, 1000);
    return skrollrPages({
      onpage: {
        'credits': function(opts) {
          $(opts.scroll_down_el).hide();
          return $(opts.scroll_top_el).show();
        }
      },
      offpage: {
        'credits': function(opts) {
          $(opts.scroll_down_el).show();
          return $(opts.scroll_top_el).hide();
        }
      }
    });
  });

}).call(this);
