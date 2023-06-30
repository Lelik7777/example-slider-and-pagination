console.log("hello from pagination");

const sectionPagination = document.querySelector(".section__pagination");
const div = document.createElement("div");
const img=document.createElement('img');
img.src='../assets/pets-charly.webp';
sectionPagination && sectionPagination.append(div);
img&&div.append(img);
