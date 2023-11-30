const btnPlus = document.querySelector(".plus"),
    btnMinus = document.querySelector(".minus"),
    number = document.querySelector(".number");



let screenNumber = 10;
number.textContent = screenNumber;
btnMinus.addEventListener("click", () => {
    if(screenNumber < 1){
        return;
    }
    screenNumber--;
    screenNumber < 10 ? number.textContent = `0${screenNumber}` : number.textContent = screenNumber;
})

btnPlus.addEventListener("click", () => {
    screenNumber++;
    screenNumber > 9 ? number.textContent = screenNumber : number.textContent = `0${screenNumber}`;
})

