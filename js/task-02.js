// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
console.dir(list);

const allIngridientsList = ingredients.map((ingridient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingridient;
  console.log(li);
  return li;
});

list.append(...allIngridientsList);
