const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const DATE = new Date();
    const MINUTES = DATE.getMinutes();
    const HOURS = DATE.getHours();
    const SECONDS=DATE.getSeconds();
    clockTitle.innerText= `${HOURS<10 ? `0${HOURS}`:`${HOURS}`}:${MINUTES<10 ? `0${MINUTES}`:`${MINUTES}`}:${SECONDS<10 ? `0${SECONDS}`:`${SECONDS}`} `;
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();