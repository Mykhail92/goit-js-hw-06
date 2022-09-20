// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refsBody = document.querySelector("body");
// console.log(refsBody);
const refsButtonChangeColor = document.querySelector(".change-color");

const refsSpanValue = document.querySelector(".color");
// console.log(refsSpanValue);

refsButtonChangeColor.addEventListener("click", onClick);
// console.dir(refsButtonChangeColor);

function onClick(event) {
  refsBody.style.backgroundColor = getRandomHexColor();
  refsSpanValue.textContent = refsBody.style.backgroundColor;
  // console.dir(refsSpanValue.textContent);
}
