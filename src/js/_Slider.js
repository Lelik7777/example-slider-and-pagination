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
    this.showedCards = [];
    this.arrayCards = [];
    this.arrayVisibleCards = [];
    this.numberVisibleGroup = 1;

    this.buttonRight;
    this.build(this.data, this.numberCards);
  }
  build(data, numberCards) {
    this.buttonLeft = this.createButton(
      CONSTANTS.ARROW_LEFT,
      CONSTANTS.BUTTON,
      CONSTANTS.BUTTON_LEFT
    );
    this.slider = this.createSlider();
    this.cardsContainer = this.createCardsContainer();

    // this.card=this.createCard(this.data);
    this.buttonRight = this.createButton(
      CONSTANTS.ARROW_RIGHT,
      CONSTANTS.BUTTON,
      CONSTANTS.BUTTON_RIGHT
    );
    this.createArrayCards(this.data);
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
  //!create array of objects type class Card
  createArrayCards(data) {
    for (let i = 0; i < data.length; i++) {
      this.arrayCards.push(new Card(data[i]));
    }
  }

  bind() {
    //!add to DOM three ul.cards
    for (let i = 0; i < this.numberCardsContainers; i++) {
      this.cardsContainer.append(this.createCards(i));
    }
    //!add three li.card for visible part of slider
    for (let i = 0; i < this.numberCards; i++) {
      this.arrayCards[i].render(
        this.cardsContainer.children[this.numberVisibleGroup]
      );
      this.arrayVisibleCards.push(this.arrayCards[i]);
    }
    console.log(this.arrayVisibleCards);
    // let count = 0;

    // for (let i = 0; i < this.numberCardsContainers; i++) {
    //   this.cardsContainer.append(this.createCards(i + 1));
    // }
    // for (let i = 0; i < this.numberCardsContainers; i++) {
    //   for (let j = 0; j < this.numberCards; j++) {
    //     const card = new Card(this.data[count]);
    //     card.render(this.cardsContainer.children[i]);
    //     if (i === 1) {
    //       this.showedCards.push(card);
    //     }
    //     count++;
    //   }
    //   console.log(this.showedCards);
    // }
    this.slider.append(this.cardsContainer);
    UTILS.getElementFromDom(CLASSES.SECTION_SLIDER).append(
      this.buttonLeft,
      this.slider,
      this.buttonRight
    );
  }
}
