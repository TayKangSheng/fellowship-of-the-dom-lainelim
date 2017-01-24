console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var body = document.querySelector('body')

var lands = ['The Shire', 'Rivendell', 'Mordor']
// Part 1

  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
function makeMiddleEarth () {
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (landName) {
    var land = document.createElement('article')
    var h1 = document.createElement('h1')
    h1.textContent = landName

    land.appendChild(h1)
    middleEarth.appendChild(land)
  })

  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2

// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// give each hobbit a class of hobbit

function makeHobbits () {
  var ul = document.createElement('ul')

  hobbits.forEach(function (name) {
    var li = document.createElement('li')
    li.className = 'hobbit'
    li.textContent = name
    ul.appendChild(li)
  })
  var theShire = document.getElementById('middle-earth').querySelector('article')
  theShire.appendChild(ul)
}
makeHobbits()

// Part 3
// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
// add the ring as a child of Frodo
function keepItSecretKeepItSafe () {
  var ring = document.createElement('div')
  ring.id = 'the-ring'
  ring.className = 'magic-imbued-jewelry'
  ring.addEventListener('click', nazgulScreech)
  var frodo = document.querySelector('.hobbit')
  frodo.appendChild(ring)
}
keepItSecretKeepItSafe()

// Part 4
// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell
function makeBuddies () {
  var friends = document.createElement('aside')
  var ul = document.createElement('ul')
  buddies.forEach(function (friend) {
    var li = document.createElement('li')
    li.textContent = friend
    ul.appendChild(li)
  })
  friends.appendChild(ul)
  var riven = document.querySelectorAll('article')[1]
  riven.appendChild(friends)
}
makeBuddies()
// Part 5
// change the 'Strider' textnode to 'Aragorn'
function beautifulStranger () {
  document.querySelectorAll('li')[7].textContent = 'Aragorn'
}
beautifulStranger()
// Part 6
// assemble the hobbits and move them to Rivendell
function leaveTheShire () {
  var riven = document.querySelector('aside')
  var theShire = document.getElementById('middle-earth').querySelector('article')
  var hobbits = theShire.querySelector('ul')
  riven.appendChild(hobbits)
}
leaveTheShire()
// Part 7
// create a new div called 'the-fellowship' within rivendell
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party

function forgeTheFellowShip () {
  var thefellowship = document.createElement('div')
  thefellowship.id = 'the-fellowship'
  var fellows = document.querySelectorAll('li')
  var ul = document.createElement('ul')
  for (var i = 0; i < fellows.length; i++) {
    ul.appendChild(fellows[i])
    alert('fellowship forged!')
  }
  var riven = document.querySelectorAll('article')[1]
  thefellowship.appendChild(ul)
  riven.appendChild(thefellowship)
}
forgeTheFellowShip()
// Part 8
// change the 'Gandalf' textNode to 'Gandalf the White'
// apply style to the element
// make the background 'white', add a grey border
function theBalrog () {
  var GandNode = document.querySelectorAll('li')[0]
  GandNode.textContent = 'Gandalf the White'
  GandNode.style.backgroundColor = 'white'
  GandNode.style.border = '2px solid grey'
}
theBalrog()
// Part 9

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
function hornOfGondor () {
  alert('the horn of gondor has been blown')
  var boro = document.querySelectorAll('li')[4]
  var text = boro.textContent
  var strikedText = text.strike()
  boro.innerHTML = strikedText
  boro.remove()
}

hornOfGondor()
// Part 10
// take Frodo and Sam out of the fellowship and move them to Mordor
// add a div with an id of 'mount-doom' to Mordor
function itsDangerousToGoAlone () {
  var doom = document.createElement('div')
  doom.id = 'mount-doom'
  var frodo = document.querySelector('.hobbit')
  var sam = document.querySelectorAll('.hobbit')[1]
  doom.appendChild(frodo)
  doom.appendChild(sam)
  var modor = document.querySelectorAll('article')[2]
  modor.appendChild(doom)
}
itsDangerousToGoAlone()
// Part 11
// Create a div with an id of 'gollum' and add it to Mordor
// Remove the ring from Frodo and give it to Gollum
// Move Gollum into Mount Doom
function weWantsIt () {
  var goll = document.createElement('div')
  goll.id = 'gollum'
  var ring = document.getElementById('the-ring')
  goll.appendChild(ring)
  var doom = document.getElementById('mount-doom')
  doom.appendChild(goll)
}
weWantsIt()
// Part 12
// remove Gollum and the Ring from the document
// remove all the buddies from the document
// Move all the hobbits back to the shire
function thereAndBackAgain () {
  var doom = document.getElementById('mount-doom')
  console.log(doom)
  doom.remove()
  var fellow = document.getElementById('the-fellowship')
  fellow.remove()
  makeHobbits()
}
thereAndBackAgain()
