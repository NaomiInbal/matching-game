
 //animation of welcome when the game starts
function animateWelcomeScreen() {
    const colors = ["red", "#7f00ff", "#4ee44e", "#ffa500", "blue", "#ff00ff"];//array of the colors 
    let colorIndex = 0;
    const intervalId = setInterval(() => {
        const element = document.getElementsByClassName("welcome-animation")[0];
        element.style.color = colors[colorIndex];
        element.style.fontStyle = colorIndex % 2 === 0 ? "italic" : "unset"; //Changes the letters to italic or straight
        element.style.fontSize = colorIndex % 2 !== 0 ? "150px" : "60px"; //Changes the size of the letters
        colorIndex++;
        if (colorIndex > colors.length - 1) {
            clearInterval(intervalId);
            setTimeout(() => {
                element.style.display = "none";                
            }, 2000);        }
    }, 500);
}
//function of the timer
function animateLoaderCircle() {
    const loaderElement = document.getElementsByClassName("loader")[0];
    loaderElement.style.display = "block";
    const loaderPercentsElement =
        document.getElementsByClassName("loader-percents")[0];
    let percents = 0;
    const intervalId = setInterval(() => {
        loaderPercentsElement.innerHTML = `${percents}%`;
        if (percents >= 100) {
            window.location.href = './play.html'
        }
        percents++;
    }, 25);
}


function main(){
    animateWelcomeScreen();
    setTimeout(() => {
        animateLoaderCircle();
    },5000)
   
}
main();
