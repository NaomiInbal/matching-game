let score = 0;
let scoreVal = document.getElementsByClassName("score-value")[0];

function animateWelcomeScreen() {
    const colors = ["red", "violet", "green", "yellow", "blue", "purple"];
    let colorIndex = 0;
    const intervalId = setInterval(() => {
        const element = document.getElementsByClassName("welcome-animation")[0];
        element.style.color = colors[colorIndex];
        element.style.fontStyle = colorIndex % 2 === 0 ? "italic" : "unset";
        element.style.fontSize = colorIndex % 2 !== 0 ? "150px" : "60px";
        colorIndex++;
        if (colorIndex > colors.length - 1) {
            clearInterval(intervalId);
            setTimeout(() => {
                element.style.display = "none";
                animateProgressLoader();
            }, 2000);
        }
    }, 500);
}
animateWelcomeScreen();
function animateProgressLoader() {
    const loaderElement = document.getElementsByClassName("loader")[0];
    loaderElement.style.display = "block";
    const loaderPercentsElement =
        document.getElementsByClassName("loader-percents")[0];
    let percents = 0;
    const intervalId = setInterval(() => {
        loaderPercentsElement.innerHTML = `${percents}%`;
        if (percents >= 100) {
            clearInterval(intervalId);
            setTimeout(() => {
                const loaderWrapperElement =
                    document.getElementsByClassName("loader-wrapper")[0];
                loaderWrapperElement.style.display = "none";
                animateCardsBoxes();
                setTimeout(() => {
                    showInstruction();
                }, 1000);
                setTimeout(() => {
                    play();
                }, 7000);
            }, 3000);
        }
        percents++;
    }, 25);
}
function animateCardsBoxes() {
    const gameContainerElement =
        document.getElementsByClassName("game-container")[0];
    gameContainerElement.style.display = "flex";
    const card1 = document.getElementById("card-box-1");
    const card2 = document.getElementById("card-box-2");
    setTimeout(() => {
        card1.style.transform = "translateX(-35vw)";
        card2.style.transform = "translateX(35vw)";
    });
}
function showInstruction() {
    var instructionWrapper = document.getElementsByClassName(
        "instruction-wrapper"
    )[0];
    instructionWrapper.style.display = "flex";
    setTimeout(() => {
        instructionWrapper.style.display = "none";
    }, 5000);
    var canvas = document.getElementById("game-instructions");
    var ctx = canvas.getContext("2d");
    ctx.font = "12px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("הוראות המשחק: \n אם הבחירה ");
}
function animateProgressBar() {
    const myBarElement = document.getElementById("my-bar");
    setTimeout(() => {
        myBarElement.style.width = "100%";
    });
}
function play() {
    animateProgressBar();
    let randomNumber1 = Math.floor(Math.random() * 13) + 1;
    let randomNumber2 = Math.floor(Math.random() * 13) + 1;
    let isEqual = randomNumber1 === randomNumber2;
    cardImg1 = document.getElementsByClassName("card-img-1")[0];
    cardImg2 = document.getElementsByClassName("card-img-2")[0];
    cardImg1.src = "./assets/card" + randomNumber1 + ".jpg";
    cardImg2.src = "./assets/card" + randomNumber2 + ".jpg";
    btnV = document.getElementsByClassName("v-btn")[0];
    btnX = document.getElementsByClassName("x-btn")[0];
    btnX.disabled = false;
    btnV.disabled = false;
    btnV.addEventListener("click", () => {
        btnV.disabled = true;
        btnX.disabled = true;
        if (isEqual) {
            onUserSuccess();
        } else {
            oUuserFailure();
        }
    });
    btnX.addEventListener("click", () => {
        btnX.disabled = true;
        btnV.disabled = true;
        if (isEqual) {
            oUuserFailure();
        } else {
            onUserSuccess();
        }
    });
}
function onUserSuccess() {
    score += 5;
    scoreVal.innerHTML = score;
    let cardBorder1 = document.getElementsByClassName("card-box-1")[0];
    let cardBorder2 = document.getElementsByClassName("card-box-2")[0];
    cardBorder1.style.borderColor = "#1FFF0F";
    cardBorder2.style.borderColor = "#1FFF0F";

    setTimeout(() => {
        cardBorder1.style.borderColor = "black";
        cardBorder2.style.borderColor = "black";
    }, 300);
}
function oUuserFailure() {
    score -= 5;
    scoreVal.innerHTML = score;
    let cardBorder1 = document.getElementsByClassName("card-box-1")[0];
    let cardBorder2 = document.getElementsByClassName("card-box-2")[0];
    cardBorder1.style.borderColor = "red";
    cardBorder2.style.borderColor = "red";
    setTimeout(() => {
        cardBorder1.style.borderColor = "black";
        cardBorder2.style.borderColor = "black";
    }, 300);
}

// animateCardsBoxes();
// animateProgressBar();
