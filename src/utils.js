function drawTerritory(){
    visualCtx.clearRect(0, 0, visualCtxHeight, visualCtxHeight)
    visualCtx.globalAlpha = 0.0
    visualCtx.fillstyle = 'rgb(0, 0, 0, 0.0)'
    visualCtx.fillRect (0, 0, visualCtxHeight, visualCtxHeight)
}

function visualAdjustments(){
    blackVisual.colorScoreCopy = black.score
    whiteVisual.colorScoreCopy = white.score

    blackVisual.territorySquareWidth = squareWidths
    whiteVisual.territorySquareWidth = squareWidths
}

function setValues(color) {
    color.territories = []
    color.territoryCount = parseInt(indexHTML.maxTerritoriesElem.value)
    color.maxScore = parseInt(indexHTML.maxScoreElem.value)
}

function hiddenHTML(htmlElement) {
    htmlElement.innerHTML = 'show:'
}

function showHTML() {
    showAnswer(indexHTML.blackAnswer, black)
    showAnswer(indexHTML.whiteAnswer, white)
}

function showAnswer(htmlElement,color) {
    htmlElement.innerHTML = 'show:' + ' ' + color.score
}

function updateHTMLElement(htmlElement,color) {
    let territoriesCopy = color.territories
    let htmlColorTerritories = territoriesCopy.join(', ')
    document.getElementById(htmlElement).innerHTML = htmlColorTerritories
}

function showSettings(){
    document.getElementById('setDiv').style.display = 'flex';
}

function hideSettings() {
    document.getElementById('setDiv').style.display = 'none';
}