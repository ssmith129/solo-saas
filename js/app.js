"use strict";

// svg icons support ie11
(function () {
  svg4everybody();
})(); // carousel arrows


var navArrows = ["\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"16\" viewBox=\"0 0 40 16\">\n    \t<path fill=\"#6e757c\" d=\"M9.207.293a1 1 0 0 1 .083 1.32l-.083.094L3.914 7H39.5v2H3.914l5.293 5.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-7-7a1 1 0 0 1-.083-1.32l.083-.094 7-7a1 1 0 0 1 1.414 0z\"/>\n    </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"16\" viewBox=\"0 0 40 16\">\n    \t<path fill=\"#6e757c\" d=\"M30.793 15.707a1 1 0 0 1-.083-1.32l.083-.094L36.086 9H.5V7h35.586l-5.293-5.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083 7 7a1 1 0 0 1 .083 1.32l-.083.094-7 7a1 1 0 0 1-1.414 0z\"/>\n    </svg>"]; // owl carousel

$(document).ready(function () {
  var sliderReview = $('.js-slider-review');
  sliderReview.owlCarousel({
    items: 3,
    nav: true,
    navElement: 'button',
    navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      768: {
        items: 3
      }
    }
  });
  var sliderComment = $('.js-slider-comment');
  sliderComment.owlCarousel({
    items: 3,
    nav: true,
    navElement: 'button',
    navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
}); // toggle body theme

(function () {
  var switchTheme = $('.js-switch-theme'),
      body = $('body');
  switchTheme.on('change', function () {
    if (!body.hasClass('dark')) {
      body.addClass('dark');
      localStorage.setItem('darkMode', "on");
    } else {
      body.removeClass('dark');
      localStorage.setItem('darkMode', "off");
    }
  });
})(); // faq


(function () {
  var item = $('.faq__item, .questions__item'),
      head = $('.faq__head, .questions__head'),
      body = $('.faq__body, .questions__body');
  head.on('click', function () {
    var thisHead = $(this);
    thisHead.parents('.faq__item, .questions__item').toggleClass('active');
    thisHead.parents('.faq__item, .questions__item').find('.faq__body, .questions__body').slideToggle();
  });
})(); // magnificPopup


(function () {
  var link = $('.js-popup-open');
  link.magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    removalDelay: 200,
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
  });
})(); // header


(function () {
  var header = $('.header'),
      wrapper = header.find('.header__wrapper'),
      burger = header.find('.header__burger');
  burger.on('click', function () {
    burger.toggleClass('active');
    wrapper.toggleClass('visible');
    $('html').toggleClass('no-scroll');
    $('body').toggleClass('no-scroll');
  });
})(); // pricing options


(function () {
  var view = $('.pricing__view');
  view.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parents('.pricing__item').find('.pricing__options').slideToggle();
  });
})(); // aos animation


AOS.init();