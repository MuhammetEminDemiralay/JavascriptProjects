const day = document.querySelector(".day .number"),
    hour = document.querySelector(".hour .number"),
    minute = document.querySelector(".minute .number"),
    second = document.querySelector(".second .number");
    
let secValue = 20,
    minValue = 23,
    hourValue = 1,
    dayValue = 8;


const time = setInterval(() => {
    secValue--;
    if(secValue === 0){
        minValue--;
        secValue = 60;
    }

    if(minValue === 0){
        hourValue--;
        minValue = 60;
    }

    if(hourValue === 0){
        dayValue--;
        hourValue = 23;
    }

    if(dayValue === 0 && hourValue === 0 && minValue === 0 && secValue === 0){
        clearInterval(time);
    }
    

    second.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minute.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hour.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    day.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000) 
