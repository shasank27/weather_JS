const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6c2d808dcdmshfa04731fca03295p1702ddjsnc6809ac626dc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = city => {
  cityName.innerHTML = city;
  // console.log(cityName.innerHTML);
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options,
  )
    .then(response => response.json())
    .then(response => {
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_degrees2.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;

      console.log(response);
    })
    .catch(err => console.error(err));
};

getWeather("Delhi");

// const search = document.getElementsByTagName("searchCity");
submit.addEventListener("click", e => {
  e.preventDefault();
  getWeather(city.value);
});
