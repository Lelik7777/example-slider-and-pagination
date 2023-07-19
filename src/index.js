import { petsJSON } from "./js/dataPets";
import {
  createSlider,
  addButtonLeftHandler,
  addButtonRightHandler,
} from "./js/slider";

const countCardsContainers = 3;
const countCards = 3;
window.addEventListener("load", () => {
  createSlider(petsJSON, countCardsContainers, countCards);
  addButtonLeftHandler();
  addButtonRightHandler();
});
