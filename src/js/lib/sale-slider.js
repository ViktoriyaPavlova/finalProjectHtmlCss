'use strict'
;(function () {
  let sale = document.querySelector('.sale')
  if (sale) {
    sale.classList.remove('sale--nojs')
  }

  const setSaleSlider = function () {
    let breakpoint = window.matchMedia('(min-width: 768px)')
    let saleSlider

    let breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (saleSlider) {
          saleSlider.destroy(true, true)
        }
        return
      } else if (breakpoint.matches === false) {
        return enableSwiper()
      }
    }

    let enableSwiper = function () {
      saleSlider = new Swiper('.sale__slider', {
        pagination: {
          el: '.sale__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.sale__slider-scrollbar',
        },
      })
    }

    breakpoint.addListener(breakpointChecker)
    breakpointChecker()
  }

  const saleSliderBlock = document.querySelector('.sale__slider')
  if (saleSliderBlock) {
    setSaleSlider()
  }
})()
