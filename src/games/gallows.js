import { Game } from "../core/Game";
import { random } from "../utils";
import * as words from "../module/gallowsWords";
import image from '../assets/gallows.png';

export class Gallows extends Game {
  #gameContainer
  #letters
  #card
  #title
  #image

  constructor(type, text) {
    super(type, text);
    this.#gameContainer = document.createElement("div");
    this.#gameContainer.className = "gallows";
    this.#card = document.createElement('div') // карточка игры для меню
    this.#card.classList.add('game-card')
    this.#image = document.createElement('img')
    this.#image.src = image // картинка карточки
    this.#image.className = 'image'
    this.#image.classList.add('invert')
    this.#title = document.createElement('h3')
    this.#title.classList.add('title')
    this.#title.textContent = this.text

    this.#letters = words.country; // заглушка для теста

  }

  #drawOnCavas() {}

  #selectMode(modeBtn) {
    switch (modeBtn.dataset.mode) {
      case "country":
        this.#letters = words.country;
        break;
    }
  }

  #createWord(word, list) {
    for (let i = 0; i < word.length; i++) {
      const letter = document.createElement("li");
      letter.className = "letters_letter";
      letter.textContent = word[i];
      list.append(letter);
    }
  }

  #createAlphabet() {
    let alphabet = ["абвгдеёжзийклмнопрстуфхцчшщъыьэюя"];
    alphabet = alphabet[0].split("");
  }

  #render() {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = `${this.text}`;

    const canvas = document.createElement("canvas");
    canvas.className = "gallows_area";

    const currentWord = this.#letters[random(0, this.#letters.length)].toUpperCase();

    const spellTheWord = document.createElement("ul");
    spellTheWord.className = "letters_list";
    this.#createWord(currentWord, spellTheWord);
    this.#createAlphabet();
    this.#gameContainer.append(title, canvas, spellTheWord);
  }

  start() {
    this.#gameContainer.textContent = '';
    this.#render();
    return this.#gameContainer
  }

  getGameCard() {
    this.#card.append(this.#image)
    this.#card.append(this.#title)
    return this.#card;
  }
}
