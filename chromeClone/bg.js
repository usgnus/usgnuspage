const body = document.querySelector("body")

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const img = new Image();
    img.src = `imgs/${imgNumber + 1}.jpg`
    img.classList.add('bgImg');
    body.appendChild(img);
}

function genRandom () {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();