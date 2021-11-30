export class Navbar {
    #container
    #backButton

    constructor() {
        this.#container = document.createElement('div')
        this.#container.classList.add('navbar')
        this.#backButton = document.createElement('button')
        this.#backButton.classList.add('btn')
        this.#backButton.textContent = 'Назад'
    }

    set setButtonListener(callback) {
        this.#backButton.onclick = () => callback()
    }

    render() {
        this.#container.append(this.#backButton)
        return this.#container
    }
}
