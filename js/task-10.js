// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refsInput = document.querySelector("#controls>input");
console.dir(refsInput);
const refsButtonCreate = document.querySelector("[data-create]");
console.log(refsButtonCreate);
const refsButtonDestroy = document.querySelector("[data-destroy]");
const refsAddBoxes = document.querySelector("#boxes");
console.dir(refsAddBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount) {
  let elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement("div");

    createDiv.style.width = `${30 + 10 * i}px`;
    createDiv.style.height = `${30 + 10 * i}px`;
    createDiv.style.background = getRandomHexColor();
    elementsToAdd.push(createDiv);
    console.log(createDiv.style.width);
  }
  console.log(elementsToAdd);
  return elementsToAdd;
}

const destroyBoxes = () => {
  refsAddBoxes.innerHTML = "";
};

refsButtonCreate.addEventListener("click", () => {
  let addBoxes = createBoxes(refsInput.value);
  console.dir(refsInput.value);
  refsAddBoxes.append(...addBoxes);
});

console.dir(refsInput.value);

refsButtonDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
