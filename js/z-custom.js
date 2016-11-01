const doc = window.document.documentElement
const optWrapper = document.getElementById('js-options')
const actWrapper = document.getElementById('js-actions')
const optInput = doc.querySelectorAll('.js-option')
const btn = doc.querySelectorAll('.js-btn')
const switcher = doc.querySelectorAll('.js-switcher')

const hasClass = (element, cls) => {
    return element.classList.contains(cls);
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

const handleSwitch = (event) => {
  const checked = event.target.checked
  doc.classList[!checked ? 'add' : 'remove']('basic')
  doc.classList[checked ? 'add' : 'remove']('enhanced')
  optWrapper.classList.remove('is-active')
  actWrapper.classList.remove('is-active')
  removeClass(optInput, 'is-checked')
  if (checked) {
    if (window.Modernizr.csstransforms && window.Modernizr.csstransitions ) {
      doc.className += ' has-animation'
      window['hasAnimation'] = true
    }
  } else {
    doc.classList.remove('has-animation')
  }
}

const handleClick = (event) => {
  const checked = event.target.checked
  const parent = event.target.parentNode
  if((checked) && (hasClass(doc, 'enhanced'))) {
    parent.classList.add('is-checked')
    optWrapper.classList.add('is-active')
    actWrapper.classList.add('is-active')
  }
}

const handleAction = () => {
  if (hasClass(doc, 'enhanced')) {
    optWrapper.classList.remove('is-active')
    actWrapper.classList.remove('is-active')
    removeClass(optInput, 'is-checked')
  }
}

addEventListenerList(switcher, 'change', handleSwitch)

addEventListenerList(optInput, 'change', handleClick)

addEventListenerList(btn, 'click', handleAction)

