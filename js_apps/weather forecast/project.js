// 1. DOM navigation
// 2. Event initialization
// 3. Make HTTP request
// 4. Handle error
// 5. Display data

function getElement(id) {
    return document.getElementById(id)
}

var city = getElement("current-city"),
    humidity = getElement("current-humidity"),
    pressure = getElement("current-pressure"),
    temperature = getElement("current-temperature"),
    windSpeed = getElement("current-wind-speed"),
    getWeatherButton = getElement("get-weather"),
    weatherSummary = getElement("weather-summary"),
    loading = false;

function getWeatherCoordinates() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getWeatherData(position.coords.latitude, position.coords.longitude)
        })
    } else {
        return alert('Could not get current location')
    }
}


function getWeatherData(latitude, longitude) {
    loading = true;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=96e1de85b9e42c8ad2124d596c1768d5`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            displayData(data)
            loading = false;
        })
        .catch(function(error) {
            loading = false;
            console.error(error)
        })
}

function displayData(data) {
    city.innerHTML = `Current city: ${data.name}`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    pressure.innerHTML = `Pressure: ${pascalToRtSt(data.main.pressure)}merc.`
    temperature.innerHTML = `Temperature: ${kelvinToCelsius(data.main.temp)}&#8451;`
    windSpeed.innerHTML = `Wind: ${knotsToKm(data.wind.speed)}km/h`
    weatherSummary.innerHTML = `${data.weather[0].description}`
}

function kelvinToCelsius (t) {
    return Math.round(t - 273.15) 
}

function pascalToRtSt(pa) {
    return pa * 0.75
}

function knotsToKm(w) {
    return Math.round(w * 1.852) 
}


getWeatherButton.addEventListener("click", getWeatherCoordinates);
