
function detectBG(){
    const getDiv= document.querySelector(`.for${IMGINFO}`);
    if(IMGINFO==1){
        getDiv.classList.add("discover");
    }
    else if(IMGINFO==2){
        getDiv.classList.add("discover");
    }else if(IMGINFO==3){
        getDiv.classList.add("discover");
    }else if(IMGINFO==4){
        getDiv.classList.add("discover");
    }else if(IMGINFO==5){
        getDiv.classList.add("discover");
    }
}

function init(){
    detectBG();
}

init();