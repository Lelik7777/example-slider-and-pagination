import { Card } from "./Card";
import { CLASSES, CONSTANTS } from "./config";
import { UTILS } from "./utils";

export class _Slider {
  constructor(data, numberCardsContainers, numberCards) {
    this.numberCards = numberCards;
    this.numberCardsContainers = numberCardsContainers;
    this.data = data;
    this.buttonLeft;
    this.slider;

    this.buttonRight;
    this.build(this.data, this.numberCards);
  }
  build(data, numberCards) {
    this.buttonLeft = this.createButton(
      "<",
      CONSTANTS.BUTTON,
      CONSTANTS.BUTTON_LEFT
    );
    this.slider = this.createSlider();
    this.cardsContainer = this.createCardsContainer();

    // this.card=this.createCard(this.data);
    this.buttonRight = this.createButton(
      ">",
      CONSTANTS.BUTTON,
      CONSTANTS.BUTTON_RIGHT
    );

    this.bind();
  }
  createButton(buttonContent, ...classes) {
    const button = UTILS.createElement(CONSTANTS.BUTTON, ...classes);
    button.textContent = buttonContent;
    return button;
  }
  createSlider() {
    const sliderString = UTILS.deletePoint(CLASSES.SLIDER);
    const slider = UTILS.createElement(CONSTANTS.DIV, sliderString);
    return slider;
  }
  createCardsContainer() {
    const cardsContainer = UTILS.deletePoint(CLASSES.CARDS_CONTAINER);
    const element = UTILS.createElement(CONSTANTS.DIV, cardsContainer);
    return element;
  }

  createCards(number) {
    const cards = UTILS.deletePoint(CLASSES.CARDS);
    const element = UTILS.createElement(CONSTANTS.UL, cards);
    element.dataset.order = number;
    return element;
  }
  // стоит,возможно, исправить
  createCard(data) {
    const card = new Card(data);
    return card;
  }

  bind() {
    let count = 0;
    for (let i = 0; i < this.numberCardsContainers; i++) {
      this.cardsContainer.append(this.createCards(i + 1));
    }
    for (let i = 0; i < this.numberCardsContainers; i++) {
      for (let j = 0; j < this.numberCards; j++) {
        const card = new Card(this.data[count]);
        card.render(this.cardsContainer.children[i]);
        count++;

      }
    }
    this.slider.append(this.cardsContainer);
    UTILS.getElementFromDom(CLASSES.SECTION_SLIDER).append(
      this.buttonLeft,
      this.slider,
      this.buttonRight
    );
  }
}
