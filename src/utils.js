
function hiddenHTML(htmlElement) {
    htmlElement.innerHTML = 'show:'
}

function showHTML() {
    showAnswer(blackAnswer, black)
    showAnswer(whiteAnswer, white)
}

function showAnswer(htmlElement,color) {
    htmlElement.innerHTML = 'show:' + ' ' + color.score
}

function updateHTMLElement(htmlElement,color) {
    let territoriesCopy = color.territories
    let htmlColorTerritories = territoriesCopy.join(', ')
    document.getElementById(htmlElement).innerHTML = htmlColorTerritories
}