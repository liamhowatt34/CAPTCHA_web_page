const screen = document.querySelector('.screen');
const regenBtn = document.querySelector('.regen');


function generateCode() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    for (let i = 0; i < 7; i++) {
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