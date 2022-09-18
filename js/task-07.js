// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const refsInput = document.querySelector("#font-size-control");
console.dir(refsInput);
const refsTextRange = document.querySelector("#text");
console.dir(refsTextRange);

refsInput.addEventListener("input", onInput);
refsInput.value = 16;
function onInput() {
  //   console.dir(event.currentTarget);
  refsTextRange.style.fontSize = refsInput.value + "px";
}
