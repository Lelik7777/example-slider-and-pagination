import { CLASSES, CONSTANTS } from "./config";
import { UTILS } from "./utils";

export class _Slider {
  constructor(data,numberCards) {
    this.numberCards=numberCards;
    this.data = data;
    this.buttonLeft;
    this.slider;
    this.buttonRight;
    this.build(this.data,this.numberCards);
  }
  build(data,numberCards) {
    this.buttonLeft = this.createButton(
      "<",
      CONSTANTS.BUTTON,
      CONSTANTS.BUTTON_LEFT
    );
    this.slider = this.createSlider();
    this.cardsContainer = this.createCardsContainer();
    this.cards = this.createCards();
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

  createCards() {
    const cards = UTILS.deletePoint(CLASSES.CARDS);
    const element = UTILS.createElement(CONSTANTS.UL, cards);
    return element;
  }

  bind() {
    this.cardsContainer.append(this.cards);
    this.slider.append(this.cardsContainer);
    UTILS.getElementFromDom(CLASSES.SECTION_SLIDER).append(
      this.buttonLeft,
      this.slider,
      this.buttonRight
    );
  }
}
