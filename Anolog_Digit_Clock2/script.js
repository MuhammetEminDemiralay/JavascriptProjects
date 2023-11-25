const getHour = document.querySelector(".getHour"),
     getMinute = document.querySelector(".getMinute"),
     getSecond = document.querySelector(".getSecond");



const time = () => {

    let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

getHour.textContent = hour;
getMinute.textContent = minute;
getSecond.textContent = second;
}

setInterval(time, 1000);