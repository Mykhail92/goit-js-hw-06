const listCategories = document.querySelectorAll(".item");
const allCategories = () =>
  console.log("Number of categories: ", listCategories.length);
const eachCategories = (listCategories) =>
  listCategories.forEach((category) => {
    const headerTitle = category.firstElementChild.textContent;
    const allItem = category.querySelectorAll("li");
    console.log(`Category: ${headerTitle} \n Elements: ${allItem.length}`);
    return headerTitle, allItem;
  });

allCategories();
eachCategories(listCategories);
