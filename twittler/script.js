const SectionSub = document.querySelector('.section-sub');
const Comment = document.querySelector('.comment');
const inputName = document.querySelector('#input-name');
const inputComment = document.querySelector('#input-comment');
const tweetButton = document.querySelector('.tweetbutton');
const checkMark = document.querySelector('.checkmark');


//현재시간
function currentTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
} 

//체크마크 색상
function redCheck() {
     return checkMark.style.color = 'red'
}
function greenCheck() {
    return checkMark.style.color = '#60D300'
}
//tweet버튼 온오프
function buttonOn() {
    return tweetButton.disabled = false
}

const DATA = [];

function buttonOff(){
    return tweetButton.disabled = true
}
//체크마크 색 변경
function init() {
    inputName.addEventListener('keyup', (event) => {
        
        let len = inputName.value.length

        if(len < 4){
            redCheck();
            buttonOff();
        }else {
            greenCheck();
            buttonOn();
        }
    })
}



let i = 0;


function makeElement(event){


    let name = document.querySelector('#input-name').value;
    let comment = document.querySelector('#input-comment').value;

    let userData = {}
    userData['user'] = name

    userData['comment'] = comment




    userData['number'] = i;
    
    DATA.push(userData);



    //li만들기
    let makeLi = document.createElement('li');
    makeLi.classList.add('commentbox')
    //div만들기
    let makeDiv = document.createElement('div');
    makeDiv.classList.add('comment');

    //user name만들기
    let makeUserName = document.createElement('div');
    makeUserName.classList.add('uname');
    makeUserName.textContent = inputName.value;
    //time 만들기
    let makeTime = document.createElement('div');
    makeTime.classList.add('time');
    makeTime.textContent = currentTime();

    //msg만들기
    let makeMsg = document.createElement('div');
    makeMsg.classList.add('msg');
    makeMsg.textContent = inputComment.value;

    let pushnum = document.createElement('div');
    pushnum.textContent = i;
    pushnum.classList.add('.number');
    i+= 1;
    
    //li의 자식으로 div 넣기
    makeLi.appendChild(makeDiv);
    makeLi.appendChild(pushnum);


    //div.comment의 자식으로 넣기
    makeDiv.appendChild(makeUserName);
    makeDiv.appendChild(makeTime);
    makeDiv.appendChild(makeMsg);

    return SectionSub.appendChild(makeLi);

}

// 입력받은 값 댓글 추가 하는 함수

// tweetButton.addEventListener('click' , () => {
//     inputData();
//     makeElement();
// })



tweetButton.addEventListener('click', makeElement);



//마지막 트윗 제거
function deleteLastTweet() {
    return (DATA.length - 1).remove()
}


init();

