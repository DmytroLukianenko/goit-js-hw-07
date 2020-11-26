const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const list = document.querySelector('#ingredients')

const addList = ingredients.forEach(ingredient => {
    const ingredientList = document.createElement('li')
    list.append(ingredientList)
    ingredientList.textContent = ingredient
})
