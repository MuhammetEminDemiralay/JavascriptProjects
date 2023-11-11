const containerGame = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionİmages = document.querySelectorAll(".option_image")

    optionİmages.forEach((image, index) => {
        image.addEventListener('click', (e) => {
            image.classList.add("active");

            userResult.src = cpuResult.src = "./images/Rock.png"
            result.textContent = "Wait..."
            optionİmages.forEach((image2, index2) => {
               optionİmages.forEach((image2, index2) => {
                index !== index2 && image2.classList.remove("active")
               })
            })
            
            containerGame.classList.add("start");

            let time = setTimeout(() => {

                containerGame.classList.remove("start");

                let imageSource = e.target.src;
                userResult.src = imageSource;
    
                let randomNumber = Math.floor(Math.random() * 3)
                let cpuImages = ["images/Rock.png", "images/Paper.png", "images/Scissors.png"];
                cpuResult.src = cpuImages[randomNumber];
    
                let cpuValue = ["R", "P", "S"][randomNumber];
                let userValue = ["R", "P", "S"][index];
    
                let outcomes = {
                    RR : "Draw",
                    RP : "Cpu",
                    RS : "User",
                    PR : "User",
                    PP : "Draw",
                    PS : "Cpu",
                    SR : "Cpu",
                    SP : "User",
                    SS : "Draw"
                } 
    
                let outComeValue = outcomes[userValue + cpuValue];
                result.textContent = userValue === cpuValue ? "Match Draw" : outComeValue + " Won!!";
            }, 2500)

        });
    })