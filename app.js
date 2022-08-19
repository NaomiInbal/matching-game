function animateWelcomeScreen() {
    const colors = ['red', 'violet', 'green', 'yellow', 'blue', 'purple'];
    let colorIndex = 0;
    const intervalId = setInterval(() => {
        const element = document.getElementsByClassName('welcome-animation')[0];
        element.style.color = colors[colorIndex];
        element.style.fontStyle = colorIndex % 2 === 0 ? 'italic' : 'unset';
        element.style.fontSize = colorIndex % 2 !== 0 ? '150px' : '60px';
        colorIndex ++;
        if(colorIndex > colors.length -1){
            clearInterval(intervalId);
            setTimeout(() => {
                element.style.display = 'none';
            }, 2000)
        }
        }, 500)
}
animateWelcomeScreen();

function animateCardsBoxes(){
    const card1 = document.getElementById('card-box-1');
    const card2 = document.getElementById('card-box-2');
    card1.style.transform = 'translateX(-200px)';
    card2.style.transform = 'translateX(200px)'

}
// animateCardsBoxes()


