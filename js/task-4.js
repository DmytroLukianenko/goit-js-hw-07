const counterValue = document.querySelector('#value')
const btnIncrease = document.querySelector('button[data-action="increment"]')
const btnDecrease = document.querySelector('button[data-action="decrement"]')

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}
const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}


btnDecrease.addEventListener('click', decrement)
btnIncrease.addEventListener('click', increment)

