const downloadBtn = document.querySelector(".download-btn");
 
const fileLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/M_Icardi_21-10-2023.jpg/1200px-M_Icardi_21-10-2023.jpg"

const initTimer = () => {
    let time = 5;
    downloadBtn.innerHTML = `Your file with download in <b>${time}</b> seconds`
    const interval = setInterval(() => {
        time--;
        if(time >= 0){
           return downloadBtn.innerHTML = `Your file with download in <b>${time}</b> seconds`
        }
        clearInterval(interval);
        location.href = fileLink;
        downloadBtn.textContent = "Are you ready...."

        setTimeout(() => {
            downloadBtn.innerHTML = `
            <i class='bx bxs-download download-button'></i>
            <span class="text">Download again</span>` 
        }, 3000)
    }, 1000)

}

downloadBtn.addEventListener("click", initTimer);