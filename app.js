const formEl = document.querySelector("form");
const outputEl = document.querySelector("#output");
const inputEl = document.querySelector("#input");
const switchEl = document.querySelector(".switch");
const title = document.querySelector(".title");
const copy = document.querySelector(".copy");

// Sumit button event listener
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.input.value;
  const inputType = e.target.input.getAttribute("data-type");

  convert(inputType, inputValue);
});

// Header text Switcher
switchEl.addEventListener("click", (e) => {
  const type = e.target.getAttribute("data-type");
  inputEl.value = "";
  outputEl.innerText = "";

  if (type === "binary") {
    e.target.setAttribute("data-type", "text");
    inputEl.setAttribute("data-type", "text");
    inputEl.setAttribute("placeholder", "Input Plain Text...");
    outputEl.innerText = "Binary Output...";
    title.innerText = "Text To Binary";
  } else if (type === "text") {
    e.target.setAttribute("data-type", "binary");
    inputEl.setAttribute("data-type", "binary");
    inputEl.setAttribute("placeholder", "Input Binary Code...");
    outputEl.innerText = "Text Output...";
    title.innerText = "Binary To Text";
  }
});

// Convert function
function convert() {};

// Binary to Text conversion
function binaryToText(input) {
  let output = "";
  output = input
    .split(" ")
    .map((number) => parseInt(number, 2))
    .map((number) => String.fromCharCode(number))
    .join("");
  console.log(input);
  return output;
};
