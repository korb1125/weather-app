function formatDate(date) {
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hour}:${minutes}`;
}

let currentTime = new Date();
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = formatDate(currentTime);

function searchCity(event) {
    event.preventDefault();

    let cityInput = document.querySelector("#city-input");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${cityInput.value}`;
    let apiKey = "94394a3958fc811a15eea501da993d50";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = temperature;
    let humidity = response.data.main.humidity;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${humidity}%`;
    let windSpeed = Math.round(response.data.wind.speed);
    let windSpeedElement = document.querySelector("#wind");
    windSpeedElement.innerHTML = `${windSpeed} kmph`;
}