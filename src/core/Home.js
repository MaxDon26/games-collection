export class Home {
    constructor(selector) {
        this.el = document.querySelector(selector)

        document.body.addEventListener('click', (event) => {
            if (event.target.offsetParent !== this.el) {
                this.close()
            }
        })
    }

    menu() {
        throw new Error(`"menu" method should be implemented in Menu"`)
    }

    game() {
        throw new Error(`"game" method should be implemented in Menu"`)
    }

    add() {
        throw new Error(`"add" method should be implemented in Menu"`)
    }

    search() {
        throw new Error(`"search" method should be implemented in Menu"`)
    }
}
