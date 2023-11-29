const btn = document.querySelector(".btn"),
    close = document.querySelector(".icon"),
    messageBox = document.querySelector(".message-box"),
    bar = document.querySelector(".bar");

btn.addEventListener("click", (e) => {
    messageBox.classList.remove("visibility")
    messageBox.classList.add("active")
    close.addEventListener("click", () => {
        messageBox.classList.add("visibility")
        return;
    })
    setTimeout(() => {
        messageBox.classList.add("visibility")
        messageBox.classList.remove("active")
    }, 5000)

})



