const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "29975ab2f4a94fa0957a44c383fe3b08";


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      console.log(data)
      const Icon = data.weather[0].icon;
      const weatherIconAdrs = "http://openweathermap.org/img/wn/${weatherIcon}@2x.png";
      let iconurl = "http://openweathermap.org/img/w/" + Icon + ".png";
      
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} /  `;
 
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);