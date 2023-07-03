export const UTILS = {
  getElementFromDom(selector, element = document) {
    return element.querySelector(selector);
  },
  getElementsFromDom(selector, element = document) {
    return element.querySelectorAll(selector);
  },
  createElement(node, ...classes) {
    const element = document.createElement(node);
    element.classList.add(...classes);
    return element;
  },
  deletePoint(className){
    return className.replace(/\./g,'');
  }
};
