"use strict";

$(function () {
  $('#mMenuBtn').on('click', function () {
    $('#mMenu').slideToggle();
  });
  $('#searchBtn').on('click', function () {
    $('#logo').hide();
    $('#mMenuBtn').hide();
    $('#search').removeClass('hidden').addClass('flex');
  });
  $('#backMenu').on('click', function () {
    $('#logo').show();
    $('#mMenuBtn').show();
    $('#search').removeClass('flex').addClass('hidden');
  });
  $('.tab-item').on('click', function () {
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
  });
  var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination'
    }
  });
  var $artwork = $('.artwork').masonry({
    // options...
    itemSelector: '.work-item',
    columnWidth: '.work-sizer',
    gutter: '.gutter-sizer',
    animate: true,
    horizontalOrder: true,
    percentPosition: true
  });
  $artwork.imagesLoaded().progress(function () {
    $artwork.masonry('layout');
  });
});
//# sourceMappingURL=all.js.map
