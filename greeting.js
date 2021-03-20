const form = document.querySelector(".js-form");
const input=form.querySelector("input");
const greeting =document.querySelector(".js-greetings");
const USER_LS ="currentUser";
const SHOWING_CN="showing";

function saveName(a){
    localStorage.setItem(USER_LS,a);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(a){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`PLAYER ${a}`;
    showForm();

}

function showForm(){
    const getForm = document.querySelector(".js-toDoForm");
    getForm.classList.remove("form");
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();