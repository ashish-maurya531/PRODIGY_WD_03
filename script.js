const apiKey=`e911bb30284cc27ca1a7e4d2c9095baf`;
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const bodyBg=document.querySelector(".body");


async function checkWeather(city){
    const responce=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await responce.json();
    if (responce.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    
        if (data.weather[0].main=="Clouds"){
            weatherIcon.src="cloud.png";
        }
        else if (data.weather[0].main=="Clear"){
            weatherIcon.src="clear.png";
        }
        else if (data.weather[0].main=="Rain"){
            weatherIcon.src="rain.png";
        }
        else if (data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if (data.weather[0].main=="Snow"){
            weatherIcon.src="snow.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".weather").style.animate=" 3s ease-out";

        
        document.querySelector(".error").style.display="none";
    }



}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        // console.log("enter")
        checkWeather(searchBox.value);


   
  }
});



