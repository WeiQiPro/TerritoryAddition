// ++enter answer
// --Function to clean
// ++button to regenerate the numbers
// ++parameters for minTerritory/maxTerritory for territory
// ++timer
// ++difficulty = multiple 'boards'

const blackAnswer = document.getElementById('blackAnswer')
const whiteAnswer = document.getElementById('whiteAnswer')
const totalBlack = document.getElementById('totalBlack')
const totalWhite = document.getElementById('totalWhite')
const checkAnswers = document.getElementById('checkAnswers')
const newItemSet = document.getElementById('newItemSet')
let numBlack = document.getElementById('numBlack')
let numWhite = document.getElementById('numWhite')


let black = new TerritorySet ({})

let white = new TerritorySet ({})

function initialize() {
    black.setTerritories()
    black.setScore()
    white.setTerritories()
    white.setScore()
    updateHTMLElement('numBlack', black)
    updateHTMLElement('numWhite', white)
}
initialize()

function update() {
    hiddenHTML(blackAnswer)
    hiddenHTML(whiteAnswer)
    setValues(black)
    setValues(white)
    initialize()
}

function setValues(color) {
    color.territories = []
    color.territoryCount = Math.floor(Math.random()* (7-2) + 2)
    color.maxScore = Math.floor(Math.random()*(100-20) + 20)
}


checkAnswers.addEventListener("click", showHTML)
newItemSet.addEventListener("click", update)
