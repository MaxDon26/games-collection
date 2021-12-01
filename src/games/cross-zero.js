import { Game } from '../core/Game'
import image from '../assets/cross-zero.png'

export class CrossZeroGame extends Game {
    #card
    #image
    #title
    #gameContainer

    constructor(type, text) {
        super(type, text)
        this.#card = document.createElement('div')
        this.#card.classList.add('game-card')
        this.#image = document.createElement('img')
        this.#image.src = image
        this.#image.classList.add('image')
        this.#title = document.createElement('h3')
        this.#title.classList.add('title')
        this.#title.textContent = this.text
        this.#gameContainer = document.createElement('div')
        this.#gameContainer.classList.add('cross-zero')
    }

    start() {
        return this.#gameContainer
    }

    getGameCard() {
        this.#card.append(this.#image)
        this.#card.append(this.#title)
        return this.#card
    }
}
