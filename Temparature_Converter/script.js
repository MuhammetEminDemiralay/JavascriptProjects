const celsius = document.querySelector(".celsius .box"),
    fahrenheit = document.querySelector(".fahrenheit .box");

 window.addEventListener("load", () =>  celsius.focus());

 celsius.addEventListener("input", (e) => {
    let celValue = e.target.value;
    let compute = celValue * (9/5) + 32;
    fahrenheit.value = compute;
 });

 fahrenheit.addEventListener("input", (e) => {
    let fahrenValue = e.target.value;
    let compute = (fahrenValue - 32) * 5/9;
    celsius.value = Math.floor(compute);
 })

