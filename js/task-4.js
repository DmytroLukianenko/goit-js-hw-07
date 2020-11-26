const counterValue = document.querySelector('#value')
const btnIncrease = document.querySelector('button[data-action="increment"]')
const btnDecrease = document.querySelector('button[data-action="decrement"]')

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + Number(btnIncrease.textContent);
}
const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) + Number(btnDecrease.textContent);
}


btnDecrease.addEventListener('click', decrement)
btnIncrease.addEventListener('click', increment)

