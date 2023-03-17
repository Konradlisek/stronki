const sizeUp = document.querySelector(".size-up");
const sizeDown = document.querySelector(".size-down");
const color = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize =20


function bigText() {
    fontSize +=5
  p.style.fontSize = fontSize + 'px'

}
function smallText(){
    fontSize -=5
    p.style.fontSize = fontSize + 'px'
}

function changeColor(){
    p.style.color = ('gold')
}
color.addEventListener('click', changeColor)
sizeDown.addEventListener('click', smallText)
sizeUp.addEventListener('click', bigText)
