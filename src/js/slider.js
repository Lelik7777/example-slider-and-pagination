import { _Slider } from "./_Slider";
import { CLASSES, CONSTANTS } from "./config";

console.log("slider");
const createSlider = (data, countCardsContainers, countCards) => {
  const slider = new _Slider(data, countCardsContainers, countCards);
};

const addButtonLeftHandler = () => {
  document
    .querySelector(CLASSES.BUTTON_LEFT)
    .addEventListener(CONSTANTS.CLICK, function () {
      document
        .querySelector(CLASSES.CARDS_CONTAINER)
        .classList.add(CONSTANTS.ANIMATION_LEFT);
    });
};
const addButtonRightHandler = () => {
  document
    .querySelector(CLASSES.BUTTON_RIGHT)
    .addEventListener(CONSTANTS.CLICK, function () {
      document
        .querySelector(CLASSES.CARDS_CONTAINER)
        .classList.add(CONSTANTS.ANIMATION_RIGHT);
    });
};

export { createSlider, addButtonLeftHandler, addButtonRightHandler };
