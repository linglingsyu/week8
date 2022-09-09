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

  $('.tab-item').on('click', function () {
    $(this).addClass('tab-active').siblings().removeClass('tab-active')
    let area = $(this).data('area')
    if(area === 'artworks'){
      $('#tab-artworks').fadeIn()
      $('#tab-collection').fadeOut()
    }else{
      $('#tab-artworks').fadeOut()
      $('#tab-collection').removeClass('opacity-0').fadeIn()
      
    }
  })

  var swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true,
      },
    },
  })

  let $artwork = $('.artwork').masonry({
    // options...
    itemSelector: '.work-item',
    columnWidth: '.work-sizer',
    gutter: '.gutter-sizer',
    animate: true,
    horizontalOrder: true,
    percentPosition: true,
  })

  $artwork.imagesLoaded().progress(function () {
    $artwork.masonry('layout')
  })
})
