const button = document.getElementById("search-button");
const getloc_button = document.getElementById("getloc-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");
const dateTime = document.getElementById("date-time");

async function getData(cityName) {//promise await and async
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=797293ff06a041d69e2150953242705&q=${cityName}&aqi=no`
    );
    return await response.json();
}
/**
 * What is promise ?
 * A promise is an object representing the eventual completion or failure of an asynchronous operation.
 * what is async and await ?
 * async and await are the new way to write asynchronous code in javascript.
 * async makes a function return a Promise and allows to use await in it.
 * await makes a function wait for a Promise to complete
 * The above function works in this manner:
 * 1. The async keyword is added before the function declaration.
 * 2. The await keyword is added before a Promise.
 * 3. The response is fetched from the API.
 * 4. The response is converted to JSON format.
 * 5. The JSON response is returned.
 * async means that the function will always return a promise and it runs asynchronously
 * means it will not block the code from running that is present after the function call.
 */

button.addEventListener("click",async () => {
    const val = input.value;//get the in[put from user  using DOM
    const res = await getData(val);//the response is stored in res variable
    console.log(res);
    cityName.innerText = `${res.location.name}, ${res.location.region} - ${res.location.country}`;
    temperature.innerText = `${res.current.temp_c}°C`;
    weather.innerText = res.current.condition.text;
    weatherIcon.src = res.current.condition.icon;
    dateTime.innerText = res.location.localtime;
})

getloc_button.addEventListener("click", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const response = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=797293ff06a041d69e2150953242705&q=${lat},${long}&aqi=no`
            );
            const data = await response.json();
            console.log(data);
            cityName.innerText = `${data.location.name}, ${data.location.region} - ${data.location.country}`;
            temperature.innerText = `${data.current.temp_c}°C`;
            weather.innerText = data.current.condition.text;
            weatherIcon.src = data.current.condition.icon;
            dateTime.innerText = data.location.localtime;
        })
    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
})