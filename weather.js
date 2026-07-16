let apikey = "c651dee342c787f3bf28a22172b895bc"

let but = document.querySelector("#but") ;
let bg = document.querySelector("#bg") ;
let wlcm = document.querySelector("#homepage") 
let main = document.querySelector("#mainpage") ;
let cityname = document.querySelector("#loc") ;
let temp = document.querySelector("#tem") ;
let humid = document.querySelector("#hmd") ;
let wind = document.querySelector("#wnd") ;
let searchBtn = document.querySelector("#searchBtn") ; 
let search = document.querySelector("#search") ;
but.addEventListener("click" , () => {
    wlcm.style.display = "none" ;
    main.style.display = "block" ; 

})
searchBtn.addEventListener("click" , () => {
    let city = search.value ;
    console.log(city) ;
    if (city === "" ) {
        alert("please enter a location ") ; 
     return ; 
    }
    getweather(city) ;

})
async function getweather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
let response = await fetch(url) ;
let data = await response.json () ;
console.log(data) ;
cityname.innerText = data.name
temp.innerText = data.main.temp + "C";
humid.innerText = data.main.humidity + "%";
wind.innerText = data.wind.speed + "km/h"

}



