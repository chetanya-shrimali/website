// Generated by CoffeeScript 1.6.2
(function() {
  var module;

  module = {
    exports: {
      skrollrPages: function(opts) {
        var $curpage, $lastpage, $pages, setHash, skrollr_instance;

        opts = $.extend({
          scroll_down_el: '.scroll-page-down',
          scroll_up_el: '.scroll-page-up',
          scroll_top_el: '.scroll-page-top',
          scroll_bottom_el: '.scroll-page-bottom',
          page_el: '.page',
          offset: 200
        }, opts);
        setHash = function(hash) {
          var fx, node;

          hash = hash.replace(/^#/, "");
          fx = void 0;
          node = $("#" + hash);
          if (node.length) {
            node.attr("id", "");
            fx = $("<div></div>").css({
              position: "absolute",
              visibility: "hidden",
              top: $(document).scrollTop() + "px"
            }).attr("id", hash).appendTo(document.body);
          }
          document.location.hash = hash;
          if (node.length) {
            fx.remove();
            return node.attr("id", hash);
          }
        };
        $(opts.scroll_down_el).click(function() {
          var $new_place;

          $new_place = $pages.eq($pages.index($curpage) + 1);
          if ($new_place.length) {
            return skrollr_instance.animateTo($new_place.offset().top);
          }
        });
        $(opts.scroll_up_el).click(function() {
          var $new_place;

          $new_place = $pages.eq($pages.index($curpage) - 1);
          if ($new_place.length) {
            return skrollr_instance.animateTo($new_place.offset().top);
          }
        });
        $(opts.scroll_top_el).click(function() {
          return skrollr_instance.animateTo(0);
        });
        $(opts.scroll_bottom_el).click(function() {
          var $new_place;

          $new_place = $pages.filter(":last");
          if ($new_place.length) {
            return skrollr_instance.animateTo($new_place.offset().top);
          }
        });
        $pages = $(opts.page_el);
        $curpage = $lastpage = $pages.eq(0);
        skrollr_instance = skrollr.init({
          render: function(args) {
            var cur_page_id, last_page_id, page, _i, _len, _name, _name1, _ref, _ref1, _ref2;

            $lastpage = $curpage;
            _ref = $pages.toArray();
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              page = _ref[_i];
              if (args.curTop > $(page).offset().top - opts.offset) {
                $curpage = $(page);
              }
            }
            if ($curpage.attr('id') !== $lastpage.attr('id')) {
              cur_page_id = $curpage.attr('id');
              last_page_id = $lastpage.attr('id');
              $('a').parent().removeClass('active');
              $('a[href="/#' + cur_page_id + '"]').parent().addClass('active');
              setHash(cur_page_id);
              if ((_ref1 = opts.onpage) != null) {
                if (typeof _ref1[_name = $curpage.attr('id')] === "function") {
                  _ref1[_name](opts);
                }
              }
              return (_ref2 = opts.offpage) != null ? typeof _ref2[_name1 = $lastpage.attr('id')] === "function" ? _ref2[_name1](opts) : void 0 : void 0;
            }
          }
        });
        return skrollr_instance;
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.skrollrPages = module.exports.skrollrPages;
  }

}).call(this);

// For page scroll
$(document).on('click', '.nav.pull-right li a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});