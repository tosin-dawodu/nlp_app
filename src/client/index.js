import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const counter = document.getElementById("character-counter");
const sectionResult = document.getElementById("results");
let text = document.getElementById("text");
const form = document.getElementById("form");
const maxText = 600;

form.addEventListener("submit", (evt) => {
  return handleSubmit(evt, sectionResult, text);
});

text.addEventListener("input", () => {
  const remaining = maxText - text.value.length;
  const color = remaining < 50 ? "red" : "black";
  counter.textContent = `${remaining} Characters Left`;
  counter.style.color = color;
});


