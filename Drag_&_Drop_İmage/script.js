const boxes = document.querySelectorAll(".box"),
    image = document.querySelector(".image");

boxes.forEach(box => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();   
        box.classList.add("active");
    })

    box.addEventListener("dragleave", () => {
        box.classList.remove("active")
    })

    box.addEventListener("drop", () => {
        box.appendChild(image);
        box.classList.remove("active");
    })
    
})