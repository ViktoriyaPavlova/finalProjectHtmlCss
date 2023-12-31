'use strict'
;(function () {
  const tabs = document.querySelectorAll('.sale__tab-link')
  const tabLists = document.querySelectorAll('.sale__tab')

  const removeActive = function () {
    tabLists.forEach(function (list) {
      list.classList.remove('sale__tab--active')
    })
    tabs.forEach(function (el) {
      el.classList.remove('sale__tab-link--active')
    })
  }

  if (tabs && tabLists) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault()
        removeActive()
        tab.classList.add('sale__tab-link--active')
        tabLists[i].classList.add('sale__tab--active')
      })
    })
  }
})()
