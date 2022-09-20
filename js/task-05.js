// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
}

const refsInput = document.querySelector("#name-input");
console.dir(refsInput);
const refsOutput = document.querySelector("#name-output");
console.log(refsOutput);
refsInput.addEventListener("input", onInputSubmit);

function onInputSubmit(event) {
  refsOutput.textContent = event.target.value;
  if (event.target.value.trim() === "") refsOutput.textContent = "Anonymous";
}
