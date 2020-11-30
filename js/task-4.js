
let counterValue = 0;

const btnDecrease = document.querySelector('button[data-action="decrement"]');
const btnIncrease = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const increment = () => {
    counterValue -= 1;
    return value.textContent = counterValue;
}

const decrement = () => {
    counterValue += 1;
    return value.textContent = counterValue;
}

btnDecrease.addEventListener('click', increment);
btnIncrease.addEventListener('click', decrement);