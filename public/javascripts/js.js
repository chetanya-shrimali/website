//@ sourceMappingURL=js.map
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

  $(function() {
    $(".nav").localScroll({});
    $(".carousel").carousel();
    $(".parallax-layer").parallax({
      mouseport: $(".parallax-viewport")
    });
    $(window).resize(function() {
      $(".resize-page").css("min-height", $("body").height() + "px");
      return $("[data-spy=\"scroll\"]").each(function() {
        var $spy;
        return $spy = $(this).scrollspy("refresh");
      });
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
    return skrollr.init();
  });

}).call(this);
