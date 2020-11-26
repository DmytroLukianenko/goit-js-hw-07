const input1 = document.querySelector('#validation-input');
const onInputValidation = event => {
    const dataLength = Number(input1.getAttribute('data-length'));
    const inputLength = event.currentTarget.value.length;
    if (dataLength === inputLength) {
        input1.classList.remove('invalid');
        input1.classList.add('valid');
        return;
    }
    input1.classList.remove('valid');
    input1.classList.add('invalid');
};
input1.addEventListener('blur', onInputValidation);