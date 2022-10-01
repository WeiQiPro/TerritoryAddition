class TerritorySet {
    constructor({
        score
    }) {
        this.score = score
        this.territories = []
        this.territoryCount = Math.floor(Math.random()* (7-2) + 2)
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