const IMAGES = [
  "slide/01.png",
  "slide/02.png",
  "slide/03.png",
  "slide/04.png"
]

const slide = document.querySelector('.slide');

const ul = document.createElement('ul');

const length = IMAGES.length;

slide.append(ul);

const fildUl = slide.firstChild

function pushLi() {
  for(let i = 0; i < length; i ++){
    const li = document.createElement('li');
    fildUl.appendChild(li);
    const img = document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', IMAGES[i])
  }
}

pushLi();


console.log(slide)