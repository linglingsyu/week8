const { Callbacks } = require('jquery')

$(function () {
  $('#mMenuBtn').on('click', function () {
    $('#mMenu').slideToggle()
  })

  $('#searchBtn').on('click', function () {
    $('#logo').hide()
    $('#mMenuBtn').hide()
    $('#search').removeClass('hidden').addClass('flex')
  })

  $('#backMenu').on('click', function () {
    $('#logo').show()
    $('#mMenuBtn').show()
    $('#search').removeClass('flex').addClass('hidden')
  })

  var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  let $artwork = $('.artwork').masonry({
    // options...
    itemSelector: '.work-item',
    // columnWidth: calc(50% - 24),
    percentPosition: true,
    gutter: 24,
  })

  $artwork.imagesLoaded().progress(function () {
    $artwork.masonry()
  })
})
