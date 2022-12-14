// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const refsInput = document.querySelector("#validation-input");
// console.log(refsInput.getAttribute("data-length"));

refsInput.addEventListener("blur", onBlur);

function onBlur(event) {
  if (event.target.value.length == refsInput.getAttribute("data-length")) {
    refsInput.classList.add("valid");
    refsInput.classList.remove("invalid");
  } else {
    refsInput.classList.add("invalid");
    refsInput.classList.remove("valid");
  }
}
