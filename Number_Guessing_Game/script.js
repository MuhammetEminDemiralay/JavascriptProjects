const guess = document.querySelector(".text-guess"),
    input = document.querySelector(".boxs .input"),
    check = document.querySelector(".boxs .check"),
    textChances = document.querySelector(".text-chances"),
    chances = document.querySelector(".text-chances .number-chances");

let randomNumber;
let inputValue;
let claim = 10;

window.addEventListener("load", () => {
    const number = Math.ceil(Math.random() * 100);
    randomNumber = number;
    input.focus();
});


input.addEventListener("input", (e) => {
    let value = e.target.value;
    inputValue = value;
})

check.addEventListener("click", () => {
    if(!(inputValue > 0 && inputValue < 101)){
        guess.classList.add("danger");
        guess.textContent = "Your number is invalid";
        return
    }else{
        guess.classList.remove("danger");
    }
    claim--;
    chances.textContent = claim;
    if(claim === 0){
        textChances.classList.add("game-over");
        textChances.innerHTML = "Game Over";
    }

    inputValue > randomNumber ? 
        guess.innerHTML = "you number is high" : 
        guess.innerHTML =  "you number is low";

    if(randomNumber == inputValue){
        textChances.innerHTML = "You win..."
        check.classList.replace("check", "new-game");
        check.textContent = "New Game"
        return;
    }    
})

check.addEventListener("click", () => {

    if(claim === -1){
        window.location.reload();
    }
})