let search_btn = document.getElementById("search-btn");
let input_value = document.getElementById("place-input");
let temprature = document.getElementById("temp");
let city = document.getElementById("city");
let weatherDescription = document.getElementById("weather-description");
let weatherIcon = document.getElementById("weather-icon");
let url = "https://api.openweathermap.org/data/2.5/";
let key = "844bc282a81922c1f855eff49aa22b91";

search_btn.addEventListener("click", getLocation);

function getLocation(e) {
  let city = input_value.value.trim();
  getFetch(`${url}weather?q=${city}&appid=${key}&units=metric&lang=en`);
  e.preventDefault();
}

function getFetch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayResult(data));
}

function displayResult(data) {
  console.log(data);
  temprature.innerHTML = `${Math.round(data.main.temp)}°`;
  city.innerHTML = data.name;
  weatherDescription.innerHTML = data.weather[0].description;
  let iconData = data.weather[0].main;
  console.log(iconData);
  if (iconData === "Clear") {
    weatherIcon.innerHTML = '<i class="fas fa-sun"></i>';
  } else if (iconData === "Clouds") {
    weatherIcon.innerHTML = '<i class="fas fa-cloud"></i>';
  } else if (iconData === "Rain") {
    weatherIcon.innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
  } else if (iconData === "Snow") {
    weatherIcon.innerHTML = '<i class="fas fa-snowflake"></i>';
  }

  console.log(temprature);
  console.log(weatherDescription);
  console.log(city);
}
