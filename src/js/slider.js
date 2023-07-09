import { _Slider } from "./_Slider";
import { petsJSON } from "./dataPets";

const countCardsContainers = 3;
const countCards = 3;

const createSlider = (data) => {
  const slider = new _Slider(data, countCardsContainers, countCards);
};
createSlider(petsJSON);
