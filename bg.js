const body = document.querySelector("body");

const IMG_NUMBER = 5;
let IMGINFO=undefined;

function paintImage(a){
    const image = new Image;
    IMGINFO=a+1;
    image.src=`images/${a+1}.jpg`;
    image.onload=function (){
        image.classList.add("bgImage");
        body.prepend(image);
    }
    
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();