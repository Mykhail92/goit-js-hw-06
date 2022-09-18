{
  /* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
}
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const refBtnDecrement = document.querySelector("[data-action=decrement]");
const refBtnIncrement = document.querySelector("[data-action=increment]");
const refValue = document.querySelector("#value");
console.dir(refValue);
let counterValue = 0;

refBtnDecrement.addEventListener("click", onDecrementClick);

function onDecrementClick() {
  counterValue -= 1;
  refValue.textContent = `${counterValue}`;
  //   return counterValue;
}

refBtnIncrement.addEventListener("click", onIncrementClick);

function onIncrementClick() {
  counterValue += 1;
  refValue.textContent = `${counterValue}`;
}
