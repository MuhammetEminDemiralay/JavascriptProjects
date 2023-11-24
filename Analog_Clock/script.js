const body = document.querySelector("body"),
      hourHand = document.querySelector(".hour"),
      minuteHand = document.querySelector(".minute"),
      secondHand = document.querySelector(".second"),
      mode = document.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    mode.textContent = "Dark Mode";
}

const updateTime = () => {
    let date = new Date(),
     secToDeg =  (date.getSeconds() / 60) * 360,
     minToDeg = (date.getMinutes() / 60) * 360,
     hourToDeg = (date.getHours() / 12) * 360;
     
     secondHand.style.transform = `rotate(${secToDeg}deg)`;
     minuteHand.style.transform = `rotate(${minToDeg}deg)`;
     hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

setInterval(updateTime, 1000);

mode.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    mode.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
})