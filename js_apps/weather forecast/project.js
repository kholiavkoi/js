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
    weatherSummary = getElement("weather-summary");

function getWeatherCoordinates() {
    if(navigator.geolocation) {
        getElement('loader').style.display = 'block';
        getElement('loader').innerHTML = 'Getting location;';
        navigator.geolocation.getCurrentPosition(function(position) {
            getElement('loader').innerHTML = 'loading wether data';
            getWeatherData(position.coords.latitude, position.coords.longitude)
            .then(function() {
                setTimeout(function () {
                    getElement('loader').style.display = 'none'
                }, 700);
            })
        })
    } else {
        return alert('Could not get current location')
    }
}


function getWeatherData(latitude, longitude) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=96e1de85b9e42c8ad2124d596c1768d5`)
        .then(function(response) {
            return response.json()
        })
        .then(displayData)
        .catch(console.error)
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
