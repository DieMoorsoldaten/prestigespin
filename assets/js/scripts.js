$(document).ready(function () {
  $('.burger').click(function () {
    $('body').toggleClass('body-active')
  })

  $('.fixed-menu').click(function () {
    $('body').removeClass('body-active')
  })

  $('.header-nav-btn').click(function () {
    $('body').removeClass('body-active')
  })
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  }
})

const asise = new Swiper('.aside-slider', {
  direction: 'vertical',
  loop: true,
  effect: 'slide',
  speed: 500,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 3,
})
