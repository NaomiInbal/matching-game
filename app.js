let score = 0;
let scoreVal = document.getElementsByClassName("score-value")[0];
let isCurrentCardsEqual;
let didUserCoose = false;
let userChoiceTimeOut;

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
            }, 2000);        }
    }, 500);
}
function animateLoaderCircle() {
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
            }, 1500);
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
    },100);
}
function showInstruction() {
    const canvas = document.getElementById("game-instructions");
    canvas.style.display = "block";
    setTimeout(() => {
        canvas.style.display = "none";
    }, 5000);   
    const ctx = canvas.getContext("2d");    
    ctx.font = "20px Arial";
    ctx.textAlign = "right";
    ctx.fillText('הוראות המשחק:', 580, 50);
    ctx.fillText('עליך לענות האם הכרטיסים שווים או לא.', 580, 80);
    ctx.fillText('על תשובה נכונה תזכה ב5 נקודות.', 580, 110);
    ctx.fillText('תשובה שגויה תחסיר לך חמש נקודות.', 580, 140);
    ctx.fillText('הימנעות מתשובה עד סוף הזמן המוקצב אינה מעלה או מורידה נקודות.', 580, 170);
    ctx.fillText('בהצלחה!', 580, 200);

}
function animateProgressBar() {
    const myBarElement = document.getElementById("my-bar");
    myBarElement.style.transition = 'none';
    myBarElement.style.width = 0;

    setTimeout(() =>{
        myBarElement.style.transition = 'width 10s linear';
        myBarElement.style.width = "100%";
    },500)


}

function listenToUserChoice(){
    btnV = document.getElementsByClassName("v-btn")[0];
    btnX = document.getElementsByClassName("x-btn")[0];
    btnV.addEventListener("click", () => {
        didUserCoose = true;
        btnV.disabled = true;
        btnX.disabled = true;
        if (isCurrentCardsEqual) {
            onUserSuccess();
        } else {
            oUuserFailure();
        }
    });
    btnX.addEventListener("click", () => {
        didUserCoose = true;
        btnX.disabled = true;
        btnV.disabled = true;
        if (isCurrentCardsEqual) {
            oUuserFailure();
        } else {
            onUserSuccess();
        }
    });
    
}

function play() {
    didUserCoose = false;
    animateProgressBar();
    btnV = document.getElementsByClassName("v-btn")[0];
    btnX = document.getElementsByClassName("x-btn")[0];
    btnX.disabled = false;
    btnV.disabled = false;
    let randomNumber1 = Math.floor(Math.random() * 13) + 1;
    let randomNumber2 = Math.floor(Math.random() * 13) + 1;
    isCurrentCardsEqual = randomNumber1 === randomNumber2;
    cardImg1 = document.getElementsByClassName("card-img-1")[0];
    cardImg2 = document.getElementsByClassName("card-img-2")[0];
    cardImg1.src = "./assets/card" + randomNumber1 + ".jpg";
    cardImg2.src = "./assets/card" + randomNumber2 + ".jpg";
    userChoiceTimeOut = setTimeout(() =>{
        clearTimeout(userChoiceTimeOut)
        if(!didUserCoose){
            play();
        }
    },10500)
}
function onUserSuccess() {
    score = score +5;
    scoreVal.innerHTML = score;
    let cardBorder1 = document.getElementsByClassName("card-box-1")[0];
    let cardBorder2 = document.getElementsByClassName("card-box-2")[0];
    cardBorder1.style.borderColor = "#1FFF0F";
    cardBorder2.style.borderColor = "#1FFF0F";

    setTimeout(() => {
        cardBorder1.style.borderColor = "black";
        cardBorder2.style.borderColor = "black";
        play();
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
        play();
    }, 300);
}

function main(){
    animateWelcomeScreen();
    setTimeout(() => {
        animateLoaderCircle();
    },5000)
    setTimeout(() =>{
        animateCardsBoxes();
    },9000);
    setTimeout(() =>{
        showInstruction();
    },10500)
    setTimeout(() =>{
        listenToUserChoice();
        play();
    },15500)
}
main();
