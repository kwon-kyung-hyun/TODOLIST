const weather =document.querySelector(".js-weather");

const API_KEY ="58e683c1a22a01c69a8c2975f4268296";
const COORDS ="coords";

function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
           return response.json();
        }).then(function (json){
            const temperature= json.main.temp;
            const place = json.name;
            weather.innerText=`${temperature} @ ${place}`;
        });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucess(position){
    const latitude = position.coords.latitude;
    const longitude= position.coords.longitude;
    const coordsObj={
        latitude:latitude,
        longitude:longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("get coords fail");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();