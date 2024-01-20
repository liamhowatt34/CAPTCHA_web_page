const screen = document.querySelector('.screen');
const regenBtn = document.querySelector('.regen');
const checkBtn = document.querySelector('.btn');
const inputField = document.querySelector('.form-control');
const message = document.querySelector('.alert');


function generateCode() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
        let randomInt = Math.floor(Math.random() * 62);
        code += chars[randomInt];
    }

    return code;
}

let initialCode = generateCode();
screen.innerText = initialCode;


regenBtn.addEventListener('click', () => {
    let newCode = generateCode();
    screen.innerText = newCode;
});

checkBtn.addEventListener('click', () => {
    let inputValue = inputField.value.trim();
    message.classList.remove('alert-success', 'alert-danger');

    if (screen.innerText === inputValue) {
        message.classList.toggle('alert-success');
        message.innerHTML = 'Success!';
    } else {
        message.classList.toggle('alert-danger');
        message.innerHTML = 'Incorrect..';
    }
});