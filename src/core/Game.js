export class Game {
    constructor(type, text) {
        if (!type) {
            throw new Error('Please specify "type" param')
        }
        if (!text) {
            throw new Error('Please specify "text" param')
        }
        this.type = type
        this.text = text
    }

    start() {
        throw new Error(`Start method should be implemented in module "${this.type}"`)
    }

    getGameCard() {
        throw new Error(`getGameCard method should be implemented in module "${this.type}"`)
    }
}
