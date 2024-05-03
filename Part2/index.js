console.log("hello world");

const idInput = document.querySelector("#idInput");
const colorInput = document.querySelector("#colorInput");

console.dir(idInput);
console.log(colorInput);

function setCard() {
  const card = document.querySelector(`#${idInput.value}`);
  card.style.color = colorInput.value;
}

document.querySelector("#editCardButton").addEventListener("click", setCard);
