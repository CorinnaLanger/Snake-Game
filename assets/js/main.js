

// Variable für den umschließend Div
let contentdiv = document.getElementById('snakeField');

//100 div´s erstellen mit Hilfe von einem Loop

for(let i = 0; i <= 99; i++) {
    let newElement = document.createElement('div');
    newElement.className = 'item';
    contentdiv.appendChild(newElement);
    
}

// Random Farbänderung wenn der Mauzeiger drüber fährt für eine halbe Sek
let play = () => {
    contentdiv.childNodes.forEach((item) => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "#" + randomColor;
            goback = () => {
                item.style.backgroundColor = "";
            }
            setTimeout(goback, 500)
        });
    })
}
play()





  