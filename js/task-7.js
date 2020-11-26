const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleTextChange = event => {
    text.style.fontSize = `${event.currentTarget.value}px`;
};

control.addEventListener('input', handleTextChange);