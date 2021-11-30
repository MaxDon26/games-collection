export class Search {
    #input

    constructor() {
        this.#input = document.createElement('input')
        this.#input.classList.add('search')
        this.#input.placeholder = 'Введите запрос'
    }

    set setInputValueHandler(callback) {
        this.#input.oninput = (e) => callback(e)
    }

    render() {
        return this.#input
    }
}
