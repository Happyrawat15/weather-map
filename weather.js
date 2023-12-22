const apikey = "d0c4c6a93b6d3e1d842ab69e3a239dd2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather img");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Drizzle") {
        weathericon.src = "./images/drizzle.png"
    }

    else if (data.weather[0].main == "Clouds") {
        weathericon.src = "./images/clouds.png"
    }

    else if (data.weather[0].main == "Mist") {
        weathericon.src = "./images/mist.png"
    }

    else if (data.weather[0].main == "Rain") {
        weathericon.src = "./images/rain.png"
    }

    else if (data.weather[0].main == "Snow") {
        weathericon.src = "./images/snow.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "./images/clear.png"
    }
}
searchbtn.addEventListener("click",function(){
    checkweather(searchbox.value)
})