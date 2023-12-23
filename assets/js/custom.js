$(document).ready(function () {
  var page_height = jQuery(window).height() - jQuery("footer").outerHeight();
  $(".main-content-wrapper").css("min-height", page_height + "px");

  //Fix Navbar on Scroll Page

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 143) {
      $(".navigation-bar").addClass("fixed-top");
    } else {
      $(".navigation-bar").removeClass("fixed-top");
    }
  });

  // Responsive Menu
  $(".toggle-menu-btn").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("change");
    $(".navigation-bar").toggleClass("mobile-menu-open");
    $(".navbar-links").slideToggle();
  });

  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("active");
    $(".tab-content").removeClass("current");

    $(this).addClass("active");
    $("#" + tab_id).addClass("current");
  });

  //ProfileDropdown
  if ($(window).width() > 767) {
    $("body").click(function () {
      $(".profile-dropdown-menu").removeClass("open");
    });
  }
  $(".profile-dropdown").click(function (e) {
    e.stopPropagation();
  });
  $(".profile-dropdown a").click(function () {
    $(this).toggleClass("active");
    $(".profile-dropdown-menu").toggleClass("open");
  });

  //EqualHeight
  $(".eq-height").matchHeight();

  //collapsible-acc

  $(".acc_card").eq(0).addClass("active");
  $(".acc_card").eq(0).children(".acc_panel").show();
  $(".acc_card .acc_title").click(function () {
    if ($(this).next(".acc_panel").is(":visible")) {
      $(".acc_card .acc_panel").slideUp();
      $(".acc_card").removeClass("active");
    } else {
      $(".acc_card").removeClass("active");
      $(".acc_card .acc_panel").slideUp();
      $(this).next(".acc_panel").slideDown();
      $(this).parents(".acc_card").addClass("active");
    }
  });

  $(".list-of-courses > li").eq(0).addClass("active");
  $(".list-of-courses > li").eq(0).children(".sub-course-list").show();
  $(".list-of-courses > li > a").click(function (e) {
    e.preventDefault();
    if ($(this).next(".sub-course-list").is(":visible")) {
      $(".list-of-courses > li .sub-course-list").slideUp();
      $(".list-of-courses > li").removeClass("active");
    } else {
      $(".list-of-courses > li").removeClass("active");
      $(".list-of-courses > li .sub-course-list").slideUp();
      $(this).next(".sub-course-list").slideDown();
      $(this).parents(".list-of-courses > li").addClass("active");
    }
  });

  //Home-img-slider
  $(".home-img-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    loops: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  //Course-College-slider
  $(".college-listing-slide").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    loops: true,
    autoplay: false,
    prevArrow:
      "<button class='slick-prev'><i class='fa fa-arrow-left'></i></button>",
    nextArrow:
      "<button class='slick-next'><i class='fa fa-arrow-right'></i></button>",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //testimonial-slider
  $(".testimonial-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    loops: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //stats-counter
  $(".counting").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },

      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        },
      }
    );
  });
});

$(window).resize(function () {
  var page_height = jQuery(window).height() - jQuery("footer").outerHeight();
  $(".main-content-wrapper").css("min-height", page_height + "px");
});
