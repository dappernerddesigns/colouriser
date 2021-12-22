//colour boxes
const viewer = document.getElementById('colour-viewer')
const boxOne = document.getElementById('colour-one')
const boxTwo = document.getElementById('colour-two')
const boxThree = document.getElementById('colour-three')
const boxFour = document.getElementById('colour-four')
const boxFive = document.getElementById('colour-five')

//buttons
const twoHundred = document.getElementById('twoHundred')
const oneEighty = document.getElementById('oneEighty')
const oneSixty = document.getElementById('oneSixty')
const oneForty = document.getElementById('oneForty')
const oneTwenty = document.getElementById('oneTwenty')
const oneHundred = document.getElementById('one')
const eighty = document.getElementById('eighty')
const sixty = document.getElementById('sixty')
const forty = document.getElementById('forty')
const twenty = document.getElementById('twenty')
const reset = document.getElementById('reset')

//event listeners
boxOne.addEventListener('click', colourOne)
boxTwo.addEventListener('click', colourTwo)
boxThree.addEventListener('click', colourThree)
boxFour.addEventListener('click', colourFour)
boxFive.addEventListener('click', colourFive)
reset.addEventListener('click', resetViewer)

twoHundred.addEventListener('click', doubleBright)
oneEighty.addEventListener('click', oneEight)
oneSixty.addEventListener('click', oneSix)
oneForty.addEventListener('click', oneFour)
oneTwenty.addEventListener('click', oneTwo)
oneHundred.addEventListener('click', one)
eighty.addEventListener('click', eight)
sixty.addEventListener('click', six)
forty.addEventListener('click', four)
twenty.addEventListener('click', two)

//functions

function resetViewer() {
  viewer.style.backgroundColor = 'black'
}

function colourOne() {
  viewer.classList.remove(...viewer.classList)
  viewer.style.backgroundColor = '#ffffff'
}

function colourTwo() {
  viewer.classList.remove(...viewer.classList)
  viewer.style.backgroundColor = '#b8b8ff'
}

function colourThree() {
  viewer.classList.remove(...viewer.classList)
  viewer.style.backgroundColor = '#fffa0d'
}

function colourFour() {
  viewer.classList.remove(...viewer.classList)
  viewer.style.backgroundColor = '#23d400'
}

function colourFive() {
  viewer.classList.remove(...viewer.classList)
  viewer.style.backgroundColor = '#f50c00'
}

function doubleBright() {
  viewer.className = ''
  viewer.classList.add('twoHundred')
}

function oneEight() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('oneEighty')
}

function oneSix() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('oneSixty')
}

function oneFour() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('oneForty')
}

function oneTwo() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('oneTwenty')
}

function one() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('oneHundred')
}

function eight() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('eighty')
}

function six() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('sixty')
}

function four() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('forty')
}

function two() {
  viewer.classList.remove(...viewer.classList)
  viewer.classList.add('twenty')
}
