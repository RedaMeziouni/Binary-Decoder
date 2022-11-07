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

function convert() {};