import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { Home } from './core/Home'

export class HomePage extends Home {
    #menuItems
    #navbar
    #search
    #gameCardsContainer
    #gameContainer

    constructor() {
        super('div')
        this.el.classList.add('root')
        this.#menuItems = []
        this.#gameCardsContainer = document.createElement('div')
        this.#gameCardsContainer.classList.add('games')
        this.#navbar = new Navbar()
        this.#search = new Search()
    }

    menu() {
        this.el.textContent = ''
        this.#search.setInputValueHandler = this.search
        this.el.append(this.#search.render())
        this.#menuItems.forEach((item) => {
            item.getGameCard().addEventListener('click', (e) => this.game(item.start.bind(item)))
            this.#gameCardsContainer.append(item.getGameCard())
        })
        this.el.append(this.#gameCardsContainer)
    }

    game(callback) {
        this.el.textContent = ''
        this.#navbar.setButtonListener = this.menu.bind(this)
        this.el.append(this.#navbar.render())
        this.el.append(callback())
    }

    add(element) {
        this.#menuItems.push(element)
    }

    search(e) {
        console.log(e.target.value)
    }

    render() {
        document.body.append(this.el)
    }
}
