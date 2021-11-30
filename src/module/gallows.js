import { Game } from "../core/Game";
import { random } from "../utils";
import * as words from "./gallowsWords";

export class Gallows extends Game {
  #gameContainer;
  #letters;
  constructor(type, text) {
    super(type, text);
    this.#gameContainer = document.createElement("div");
    this.#gameContainer.className = "container";
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
    const alphabet = alphabet[0].split("");
  }

  render() {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = `${this.text}`;

    const canvas = document.createElement("canvas");
    canvas.className = "gallows_area";

    const currentWord = this.#letters[random(0, this.#letters.length)];

    const spellTheWord = document.createElement("ul");
    spellTheWord.className = "letters_list";
    this.#createWord(currentWord, spellTheWord);
    this.#createAlphabet();
    this.#gameContainer.append(title, canvas, spellTheWord);
    document.body.append(this.#gameContainer);
  }

  start() {}

  getGameCard() {
    return this.#gameContainer;
  }
}
