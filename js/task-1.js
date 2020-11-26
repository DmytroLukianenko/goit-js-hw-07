const categories = document.querySelector("#categories");
console.log(`В списке ${categories.children.length} категории.`);

const listElements = document.querySelectorAll('.item')
listElements.forEach(element => {
    console.log(`Категория: ${element.firstElementChild.textContent}`);
    console.log(`Элементов: ${element.querySelector('ul').children.length}`);
})
