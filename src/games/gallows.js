import { Game } from "../core/Game";
import { random } from "../utils";
import * as words from "../module/gallowsWords";
import image from "../assets/gallows.png";
import getImage from "../module/gallowsImg";
// import bg from "../assets/gallows/bg.jpg";

export class Gallows extends Game {
  #gameContainer;
  #letters;
  #card;
  #title;
  #image;
  #gallow;

  constructor(type, text) {
    super(type, text);
    this.#gameContainer = document.createElement("div");
    this.#gameContainer.className = "gallows";
    this.#card = document.createElement("div"); // карточка игры для меню
    this.#card.classList.add("game-card");
    this.#image = document.createElement("img");
    this.#image.src = image; // картинка карточки
    this.#image.className = "image";
    this.#image.classList.add("invert");
    this.#title = document.createElement("h3");
    this.#title.classList.add("title");
    this.#title.textContent = this.text;
    this.#letters = words.country; // заглушка для теста
    this.#gallow = document.createElement("div");
    this.count = 0;
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
      letter.innerHTML = `<span>${word[i]}</span>`;
      list.append(letter);
    }
  }

  #createAlphabet() {
    let alphabet = ["абвгдеёжзийклмнопрстуфхцчшщъыьэюя"];
    alphabet = alphabet[0].toUpperCase().split("");
    const alphabetContainer = document.createElement("ul");
    alphabetContainer.className = "alphabet";
    alphabet.forEach((letter) => {
      const letterHTML = document.createElement("li");
      letterHTML.className = "alphabet_letter";
      letterHTML.textContent = `${letter}`;
      alphabetContainer.append(letterHTML);
    });

    return alphabetContainer;
  }

  #checkLetter(el, word) {
    el.addEventListener("click", (event) => {
      Array.from(word.children).forEach((letter) => {
        if (event.target.textContent === letter.textContent) {
          letter.classList.add("visible");
          event.target.classList.add("done");
        } else {
          event.target.classList.add("checked");
          this.count++;
        }
      });
    });
  }

  #setImg(el, count) {
    const gallowImg = document.createElement("img");
    gallowImg.src = getImage(count);
    el.append(gallowImg);
  }

  #render() {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = `${this.text}`;

    this.#gallow.className = "gallows-image";

    const currentWord =
      this.#letters[random(0, this.#letters.length)].toUpperCase();

    const spellTheWord = document.createElement("ul");
    spellTheWord.className = "letters_list";
    this.#createWord(currentWord, spellTheWord);
    const alphabet = this.#createAlphabet();
    this.#setImg(this.#gallow, this.count);
    const newGame = document.createElement("button");
    newGame.textContent = "Начать заново";
    newGame.className = "again";
    newGame.onclick = () => this.start();

    this.#gameContainer.append(
      title,
      this.#gallow,
      spellTheWord,
      alphabet,
      newGame
    );

    this.#checkLetter(alphabet, spellTheWord);
  }

  start() {
    this.#gameContainer.textContent = "";
    this.#render();
    return this.#gameContainer;
  }

  getGameCard() {
    this.#card.append(this.#image);
    this.#card.append(this.#title);
    return this.#card;
  }
}
