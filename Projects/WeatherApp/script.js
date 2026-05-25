const API_KEY = "API_KEY"

async function getWeather() {
  const city = document.getElementById("cityName").value;


   const { Lattitude, Longitude } = await getGeoLocation(city);

  //   console.log({ Lattitude, Longitude });

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  console.log(data);

  const temperature = data.main.temp - 273.15;


  

  document.getElementById("weatherBox").style.display = "block";

  document.getElementById("city").innerText = data.name;

  document.getElementById("temperature").innerText =  temperature.toFixed(2) ;

  document.getElementById("humidity").innerText = data.main.humidity;

  document.getElementById("wind").innerText = data.wind.speed;
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

   console.log(data);

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}
