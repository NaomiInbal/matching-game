function startOver(){
    btnStart = document.getElementsByClassName("start-over-btn")[0];
    btnStart.addEventListener("click", () => {
        window.location.href = './play.html'
    });
}
startOver();