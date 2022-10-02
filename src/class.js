class TerritorySet {
    constructor({
        komi
    }) {
        this.score = 0
        this.territories = []
        // We want the territory count to be between 4 -5
        this.territoryCount = Math.floor(4 + (Math.random() * 2))
        this.maxScore = 90
        this.komi = komi
    }

    setTerritories() {
        let tally = 0
        do {
            this.territories = [] // reset array after every loop
            for(var i = 0; i < this.territoryCount; i++) {
                this.territories[i] = i;
            }

            this.territories = this.territories.map((x) => {
                return Math.floor(2 + Math.random() * 62)
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
        if (this.komi) {
            this.score += this.komi
        }
    }
}
