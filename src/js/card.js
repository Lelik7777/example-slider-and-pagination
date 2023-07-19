import { CLASSES, CONSTANTS } from "./config";
import { UTILS } from "./utils";

export class Card {
  constructor(data) {
    this.data = data;
    this.card;
    this.image;
    this.button;

    this.build();
  }
  build() {
    const cardName=UTILS.deletePoint(CLASSES.CARD);
    
    this.card = UTILS.createElement(CONSTANTS.LI,cardName);
    this.image = this.createImage(this.data);
    this.button = this.createButton();

    this.bind();
  }
  createImage(data) {
    const cardImg = UTILS.deletePoint(CLASSES.CARD_IMG);
    const img = UTILS.createElement(CONSTANTS.IMG, cardImg);
    img.src=data.img;
    img.setAttribute("alt", data.name);
    return img;
  }
  createButton() {
    const element = UTILS.createElement(CONSTANTS.BUTTON, CLASSES.CARD__BUTTON);
    element.textContent = "More info";
    return element;
  }
  bind() {
    this.card.append(this.image,this.button);
  }
  render(parentElement) {
    parentElement.append(this.card);
  }
}
