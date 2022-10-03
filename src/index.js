// ++enter answer
// --Function to clean
// ++Elem to regenerate the numbers
// ++parameters for minTerritory/maxTerritory for territory
// ++timer
// ++difficulty = multiple 'boards'

const visualTerritory = document.getElementById('visualTerritory')
const visualCtx = visualTerritory.getContext('2d')

let visualAdjustor = 2,
visualCtxHeight = innerHeight / visualAdjustor

const indexHTML ={
whiteAnswer: document.getElementById('whiteAnswer'),
totalBlack: document.getElementById('totalBlack'),
totalWhite: document.getElementById('totalWhite'),
checkAnswers: document.getElementById('checkAnswers'),
newItemSet: document.getElementById('newItemSet'),
maxScoreElem: document.getElementById('maxScore'),
maxTerritoriesElem: document.getElementById('maxTerritories'),
submitInput: document.getElementById('submitInput'),
settingsDiv: document.getElementById('setDiv'),
settingsElem: document.getElementById('setButton'),
blackAnswer: document.getElementById('blackAnswer'),
numBlack: document.getElementById('numBlack'),
numWhite: document.getElementById('numWhite'),

}

let black = new TerritorySet ({})   
let white = new TerritorySet ({})
let blackVisualMap = []
let whiteVisualMap = []

let blackVisual = new VisualTerritories ({
    visualCtxPosition: {
        x: 0,
        y: 0,
    },
    territoryFallVector: {
        x: 0,
        y: 0,
    },
    territorySquareWidth: 0,       
    territoryColorGradiant: 'black',
    territoryColorBorder: 'white',
    colorScoreCopy: 0
})

let whiteVisual = new VisualTerritories ({
    visualCtxPosition: {
        x: 0,
        y: 0,
    },
    territoryFallVector: {
        x: 0,
        y: 0,
    },
    territorySquareWidth: 5,       
    territoryColorGradiant: 'white',
    territoryColorBorder: 'black',
    colorScoreCopy: 0
})

let squareWidths

function initialize() {
    black.setTerritories()
    black.setScore()
    white.setTerritories()
    white.setScore()
    updateHTMLElement('numBlack', black)
    updateHTMLElement('numWhite', white)
    drawTerritory()
    visualAdjustments()
    squareWidths = visualCtxHeight / (black.score + white.score)
}
initialize()

function update() {
    hiddenHTML(indexHTML.blackAnswer)
    hiddenHTML(indexHTML.whiteAnswer)
    setValues(black)
    setValues(white) 
    initialize()
}

indexHTML.settingsElem.addEventListener("click", showSettings)
indexHTML.submitInput.addEventListener("click", () => {
    hideSettings()
    update()
})
indexHTML.checkAnswers.addEventListener("click", showHTML)
indexHTML.newItemSet.addEventListener("click", update)