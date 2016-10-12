const doc = window.document.documentElement
const optWrapper = document.getElementById('js-options')
const actWrapper = document.getElementById('js-actions')
const optInput = doc.querySelectorAll('.js-option')
const btn = doc.querySelectorAll('.js-btn')
const switcher = doc.querySelectorAll('.js-switcher')

if ( window.Modernizr.csstransforms3d && window.requestAnimationFrame ) {
  doc.className += ' has-animation'
  window['hasAnimation'] = true
}

const addEventListenerList = (list, event, fn) => {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

const removeClass = (list, className, fn) => {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].classList.remove(className);
  }
}

const handleSwitch = (element) => {
  const mode = element.target.value
  doc.className += ' use-keyboard'
}

const handleClick = (element) => {
  const target = element.target
  const parent = target.parentNode
  if(target.checked) {
    parent.classList.add('is-checked')
  optWrapper.classList.add('is-active')
  actWrapper.classList.add('is-active')
  }
}

const handleAction = (element) => {
  optWrapper.classList.remove('is-active')
  actWrapper.classList.remove('is-active')
  removeClass(optInput, 'is-checked')
}

addEventListenerList(switcher, 'change', handleSwitch)

addEventListenerList(optInput, 'change', handleClick)

addEventListenerList(btn, 'click', handleAction)
