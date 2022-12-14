// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
const refsForm = document.querySelector(".login-form");
refsForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  console.dir(event.currentTarget.elements);
  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields!!!");
  }
  const dataUsers = {
    Email: email.value,
    Password: password.value,
  };
  console.log(dataUsers);
  event.currentTarget.reset();
}
