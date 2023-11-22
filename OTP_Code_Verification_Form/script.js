const inputs = document.querySelectorAll("input"),
    button = document.querySelector("button");

 inputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

        if(currentInput.value.length > 1){
            currentInput.value = "";
            return;
        }

        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if(e.key === "Backspace"){
            inputs.forEach((input, index2) => {
                if(index <= index2 && prevInput){
                    input.setAttribute("disable", true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            })
        }

        if(!inpust[3].disabled && inputs[3].value !== ""){
            button.classList.add("active");
            return;
        }

        button.classList.remove("active");
    })
 })