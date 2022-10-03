class HTML {
    
}

class TerritorySet {
    constructor({
        score
    }) {
        this.score = score
        this.territories = []
        this.territoryCount = Math.floor(4 + Math.random()* 2)
        this.maxScore = Math.floor(Math.random()*(100-20) + 20)
    }
    
    setTerritories() {
        let tally = 0
        do {
            for(var i = 0; i < this.territoryCount; i++) {
                this.territories[i] = i;
            }
            
            this.territories = this.territories.map((x) => {
                return Math.floor(Math.random() * (this.maxScore - 2) + 2)
            })
            
            tally = this.territories.reduce(
                (accumulator, territory) => accumulator + territory, 
                0)
            } 
            while (tally > this.maxScore);
    }

    setScore() {
        this.score = 0
        for (let i = 0; i < this.territories.length; i++) {
            this.score += this.territories[i];
        }
    }
}

class VisualTerritories {
    constructor({
        visualCtxPosition,
        territoryFallVector,
        territorySquareWidth,        
        territoryColorGradiant,
        territoryColorBorder,
        colorScoreCopy
    }){
    this.visualTerritoryPosition = visualCtxPosition
    this.territoryFallVector = territoryFallVector
    this.territorySquareWidth = territorySquareWidth
    this.territoryColorGradiant = territoryColorGradiant
    this.territoryColorBorder = territoryColorBorder
    this.colorScoreCopy = colorScoreCopy
    }

    visualRepresentation(){
        visualCtx.fillstyle = this.territoryColorGradiant
        visualCtx.strokeFill = this.territoryColorBorder
        visualCtx.stroke(0, 0, this.territorySquareWidth+1, territorySquareWidth+1)
        visualCtx.fillRect(this.visualCtxPosition.x, this.visualCtxPosition.y, this.territorySquareWidth, this.territorySquareWidth)
    }

    visualAnimation(){
        this.visualCtxPosition.y += this.territoryFallVector.y
        
    }
}