/*
이미지 슬라이드 만들기
1. html에 이미지 링크를 여러개 넣는다
2. DOM으로 찾아 배열에 넣는다
3. 배열의 0번째 요소를 화면에 출력시킨다.
4. 2초에 한번씩 다음 요소를 출력시킨다.
5. 다음에 출력할 요소가 없으면 처음 요소를 출력시킨다.

*/

const DATA = ["imgSlide/01.png",
"imgSlide/02.png",
"imgSlide/03.png",
"imgSlide/04.png",
"imgSlide/05.png",
"imgSlide/06.png",
"imgSlide/07.png",
"imgSlide/08.png",
"imgSlide/09.png",
"imgSlide/10.png",
"imgSlide/11.png"
]
const imgLeng = DATA.length;

const bannerImg = document.querySelector(".bannerImg")
const makeImg = document.createElement('img');
makeImg.id = 'img';

const pushImg = bannerImg.append(makeImg);

let counter = 0;

const img = document.querySelector("#img");

img.setAttribute('src', DATA[imgLeng-1]);

function printImg() {
  img.setAttribute('src', DATA[counter]);
  counter++;
  if(counter >= imgLeng){
    counter = 0;
  }
} 

setInterval(printImg, 3000);

/** https://im-developer.tistory.com/97
  슬라이드 만들기
 */


