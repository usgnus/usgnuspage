const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const sec = date.getSeconds();
    clockTitle.textContent = `${
        hours < 10 ? `0${hours}` : `${hours}`
    }:${
        minutes < 10 ? `0${minutes}` : `${minutes}`
    }:${
        sec < 10 ? `0${sec}` : sec
    }`;
}

function init() {
    getTime()
    setInterval(getTime, 1000);
}

init()