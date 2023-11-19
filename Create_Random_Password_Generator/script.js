const randomPassword = document.querySelector(".password-box input"), 
    copyİcon =document.querySelector(".password-box .copy-icon"),
    rangeİnput = document.querySelector(".range"),
    sliderNumber = document.querySelector(".slider-number"),
    generateButton = document.querySelector(".generate-button");

let range = 0;
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGJHİJKLMNOPQRSTUVWXYZ0123456789!'^+%&/()=?*_-@:.";


const generatePassword = () => {
    let text = "";
    for(let i = 0; i < rangeİnput.value; i++){
        let randomNumber = Math.floor(Math.random() * allCharacters.length)
        text += allCharacters[randomNumber];
    }
    randomPassword.value = text;
    copyİcon.classList.replace("uil-file-check-alt", "uil-copy")
}

rangeİnput.addEventListener("input", (e) => {
    sliderNumber.innerText = rangeİnput.value;
    generatePassword();
})

copyİcon.addEventListener("click", () => {
    navigator.clipboard.writeText(randomPassword.value);
    copyİcon.classList.replace("uil-copy", "uil-file-check-alt")
})

generateButton.addEventListener("click", generatePassword);
