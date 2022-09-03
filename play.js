let btnV, btnX, isCurrentCardsEqual, didUserCoose, noChoiceTimeOut;
let score = 0;
let scoreVal = document.getElementsByClassName("score-value")[0];
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    const rot = Math.PI / 2 * 3;
    const x = cx;
    const y = cy;
    const step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    ctx.lineWidth=5;
    ctx.strokeStyle='#fafd0f';
    ctx.stroke();
    ctx.fillStyle='#fafd0f';
    ctx.fill();

}
drawStar(100, 50, 6, 30, 15);
drawStar(100, 200);

function animateCardsBoxes() {
    const gameContainerElement =
        document.getElementsByClassName("game-container")[0];
    gameContainerElement.style.display = "flex";
    const card1 = document.getElementById("card-box-1");
    const card2 = document.getElementById("card-box-2");
    setTimeout(() => {
        card1.style.transform = "translateX(-35vw)";
        card2.style.transform = "translateX(35vw)";
    }, 100);
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
    ctx.fillText("הוראות המשחק:", 580, 50);
    ctx.fillText("עליך לענות האם הכרטיסים שווים או לא.", 580, 80);
    ctx.fillText("על תשובה נכונה תזכה ב5 נקודות.", 580, 110);
    ctx.fillText("תשובה שגויה תחסיר לך חמש נקודות.", 580, 140);
    ctx.fillText(
        "הימנעות מתשובה עד סוף הזמן המוקצב אינה מעלה או מורידה נקודות.",
        580,
        170
    );
    ctx.fillText("בהצלחה!", 580, 200);
}
function animateProgressBar() {
    const myBarElement = document.getElementById("my-bar");
    myBarElement.style.transition = "none";
    myBarElement.style.width = 0;

    setTimeout(() => {
        myBarElement.style.transition = "width 10s linear";
        myBarElement.style.width = "100%";
    }, 500);
}

function listenToUserChoiceAndPlay() {
    btnV = document.getElementsByClassName("v-btn")[0];
    btnX = document.getElementsByClassName("x-btn")[0];
    btnV.addEventListener("click", () => {
        clearTimeout(noChoiceTimeOut);
        btnV.disabled = true;
        btnX.disabled = true;
        if (isCurrentCardsEqual) {
            onUserSuccess();
        } else {
            oUuserFailure();
        }
    });
    btnX.addEventListener("click", () => {
        clearTimeout(noChoiceTimeOut);
        btnX.disabled = true;
        btnV.disabled = true;
        if (isCurrentCardsEqual) {
            oUuserFailure();
        } else {
            onUserSuccess();
        }
    });
    play();
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
    noChoiceTimeOut = setTimeout(() => {      
            play();
        
    }, 10500);
}
function onUserSuccess() {
    score = score + 5;
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

function main() {
        animateCardsBoxes();
        setTimeout(() => {
            showInstruction();
        }, 2000);
        setTimeout(() => {
            listenToUserChoiceAndPlay();           
        }, 7000)
}
main();
