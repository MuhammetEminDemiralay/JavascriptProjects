const container = document.querySelector(".container");



for(let i = 0; i < 81; i++){
    container.insertAdjacentHTML("beforeend", `<button class="btn"></button>`)
}

const btns = document.querySelectorAll(".btn");
const randomIndexs = [];
const controlRow =  [
  [0,8],
  [9,17],
  [18,26],
  [27,35],
  [36,44],
  [45,53],
  [54,62],
  [63,71],
  [72,80]
]

window.addEventListener("load", () => {    // 30 tane random index ürettik
   for(let i = 0; i < 30; i++){
    const randomIndex =  Math.floor(Math.random() * 82);
    randomIndexs.push(randomIndex);
   }

   btns.forEach((btn, index) => {   
       
    if(randomIndexs.includes(index))
    {
        
        const randomBtn = Math.ceil(Math.random() * 9)
        
        console.log(controlRow[8][1]);
        if(1){
            btn.textContent = randomBtn;
        }
        
    }
   })
})






