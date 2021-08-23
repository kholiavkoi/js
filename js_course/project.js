var humidity = document.getElementById("current-humidity"),
    pressure = document.getElementById("current-pressure"),
    temperature = document.getElementById("current-temperature"),
    windSpeed = document.getElementById("current-wind-speed"),
    getWeatherButton = document.getElementById("get-weather"),
    weatherSummary = document.getElementById("weather-summary");

function getWeatherCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        });
    } else {
        return alert("Cant find your location");
    }
}

function getWeatherData(latitude, longitude) {
    fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + "7b0b73056c2f4aee9a7e5125e9d919b4"
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayData(data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

function displayData(data) {
    console.log(data.main.temp);
    temperature.innerHTML =
        "Temperature: " + kelvinToCelsius(data.main.temp) + "C";
    console.log(data.main.temp);
}

function kelvinToCelsius() {
    data.main.temp = data.main.temp - 273.15;
}

getWeatherButton.addEventListener("click", getWeatherCoordinates);