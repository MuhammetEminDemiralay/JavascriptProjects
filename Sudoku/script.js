const container = document.querySelector(".container");



for(let i = 0; i < 81; i++){
    container.insertAdjacentHTML("beforeend", `<button class="btn"></button>`)
}

const btns = document.querySelectorAll(".btn");

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        
    })
})





