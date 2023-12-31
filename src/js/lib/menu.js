'use strict'
;(function () {
  const body = document.querySelector('body')
  const siteNav = document.querySelector('.site-nav')
  const siteNavToggle = document.querySelector('.site-nav__button')

  if (siteNav) {
    siteNav.classList.remove('site-nav--no-js')
  }

  if (siteNavToggle) {
    siteNavToggle.addEventListener('click', function () {
      if (siteNav.classList.contains('site-nav--closed')) {
        siteNav.classList.remove('site-nav--closed')
        siteNav.classList.add('site-nav--opened')
        body.classList.add('no-scroll')
      } else {
        siteNav.classList.add('site-nav--closed')
        siteNav.classList.remove('site-nav--opened')
        body.classList.remove('no-scroll')
      }
    })
  }
})()
