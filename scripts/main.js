$(document).ready(function() {
  // smooth scrolling
  $(".anchor-link").on("click", function() {
    var scrollTop = $(this.hash).offset().top - 30;

    $("html,body").animate(
      {
        scrollTop: scrollTop
      },
      1000
    );
    return false;
  });

  $(".anchor-link-privacy").on("click", function() {
    var scrollTop = $(this.hash).offset().top - 155;

    $("html,body").animate(
      {
        scrollTop: scrollTop
      },
      1000
    );
    return false;
  });

  // mobile menu trigger
  $(".header-mobile-button").on("click", function() {
    $(this).toggleClass("header-mobile-button--open");
    $(".navigation").toggleClass("navigation--open");
  });

  // affix header
  $(".header")
    .affix({
      offset: {
        top: 1000
      }
    })
    .on("affix-top.bs.affix", function() {
      $(this)
        .addClass("hold")
        .delay(400)
        .queue(function() {
          $(this)
            .removeClass("hold")
            .dequeue();
        });
    });

  drift.on("ready", api => {
    if (
      window.location.href === "https://dressipi.com//privacy/" ||
      window.location.href === "https://dressipi.com//cookies/" ||
      window.location.href === "https://dressipi.com//terms-and-conditions/"
    ) {
      api.widget.hide();
    }
  });
});
