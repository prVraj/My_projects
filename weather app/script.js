const apiKey = "ef5c880f64942e194b1dcab62e3f5de6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
  if (!response.ok) {
    // Handle error response here
    console.error("Error fetching weather data:", response.statusText);
    return;
  }
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

  console.log(data);
  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else {
    weatherIcon.src = "images/unknown.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
