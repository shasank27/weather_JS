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

const updateAllCities = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=azerbaijan",
    options,
  )
    .then(response => response.json())
    .then(response => {
      azerbaijan_feels_like.innerHTML = response.feels_like;
      azerbaijan_humidity.innerHTML = response.humidity;
      azerbaijan_max_temp.innerHTML = response.max_temp;
      azerbaijan_min_temp.innerHTML = response.min_temp;
      azerbaijan_sunrise.innerHTML = response.sunrise;
      azerbaijan_sunset.innerHTML = response.sunset;
      azerbaijan_temp.innerHTML = response.temp;
      azerbaijan_wind_degree.innerHTML = response.wind_degrees;
      azerbaijan_wind_speed.innerHTML = response.wind_speed;

      console.log(response);
    })
    .catch(err => console.error(err));

  //
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata",
    options,
  )
    .then(response => response.json())
    .then(response => {
      kolkata_feels_like.innerHTML = response.feels_like;
      kolkata_humidity.innerHTML = response.humidity;
      kolkata_max_temp.innerHTML = response.max_temp;
      kolkata_min_temp.innerHTML = response.min_temp;
      kolkata_sunrise.innerHTML = response.sunrise;
      kolkata_sunset.innerHTML = response.sunset;
      kolkata_temp.innerHTML = response.temp;
      kolkata_wind_degree.innerHTML = response.wind_degrees;
      kolkata_wind_speed.innerHTML = response.wind_speed;

      console.log(response);
    })
    .catch(err => console.error(err));

  //
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london",
    options,
  )
    .then(response => response.json())
    .then(response => {
      london_feels_like.innerHTML = response.feels_like;
      london_humidity.innerHTML = response.humidity;
      london_max_temp.innerHTML = response.max_temp;
      london_min_temp.innerHTML = response.min_temp;
      london_sunrise.innerHTML = response.sunrise;
      london_sunset.innerHTML = response.sunset;
      london_temp.innerHTML = response.temp;
      london_wind_degree.innerHTML = response.wind_degrees;
      london_wind_speed.innerHTML = response.wind_speed;

      console.log(response);
    })
    .catch(err => console.error(err));

  //
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai",
    options,
  )
    .then(response => response.json())
    .then(response => {
      chennai_feels_like.innerHTML = response.feels_like;
      chennai_humidity.innerHTML = response.humidity;
      chennai_max_temp.innerHTML = response.max_temp;
      chennai_min_temp.innerHTML = response.min_temp;
      chennai_sunrise.innerHTML = response.sunrise;
      chennai_sunset.innerHTML = response.sunset;
      chennai_temp.innerHTML = response.temp;
      chennai_wind_degree.innerHTML = response.wind_degrees;
      chennai_wind_speed.innerHTML = response.wind_speed;

      console.log(response);
    })
    .catch(err => console.error(err));

  //
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston",
    options,
  )
    .then(response => response.json())
    .then(response => {
      boston_feels_like.innerHTML = response.feels_like;
      boston_humidity.innerHTML = response.humidity;
      boston_max_temp.innerHTML = response.max_temp;
      boston_min_temp.innerHTML = response.min_temp;
      boston_sunrise.innerHTML = response.sunrise;
      boston_sunset.innerHTML = response.sunset;
      boston_temp.innerHTML = response.temp;
      boston_wind_degree.innerHTML = response.wind_degrees;
      boston_wind_speed.innerHTML = response.wind_speed;

      console.log(response);
    })
    .catch(err => console.error(err));
};

updateAllCities();

// add effects
card1.addEventListener("mouseover", e => {
  document.getElementById("card-header1").classList.add("text-bg-primary");
  document.getElementById("card1").classList.add("border-primary");
});

card2.addEventListener("mouseover", e => {
  document.getElementById("card-header2").classList.add("text-bg-primary");
  document.getElementById("card2").classList.add("border-primary");
});
card3.addEventListener("mouseover", e => {
  document.getElementById("card-header3").classList.add("text-bg-primary");
  document.getElementById("card3").classList.add("border-primary");
});

// remove effects
card1.addEventListener("mouseleave", e => {
  document.getElementById("card-header1").classList.remove("text-bg-primary");
  document.getElementById("card1").classList.remove("border-primary");
});

card2.addEventListener("mouseleave", e => {
  document.getElementById("card-header2").classList.remove("text-bg-primary");
  document.getElementById("card2").classList.remove("border-primary");
});
card3.addEventListener("mouseleave", e => {
  document.getElementById("card-header3").classList.remove("text-bg-primary");
  document.getElementById("card3").classList.remove("border-primary");
});
