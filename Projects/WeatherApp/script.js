const API_KEY = "use API KEY";

async function getWeather() {
  const cityNmae = document.getElementById("cityName").value.trim();
  const { latitude, longitude } = await getGeoLocation(cityNmae);

  console.log(latitude);
  console.log(longitude);
  
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${API_KEY}`;

  const responce = await fetch(GEO_LOC_API);

  const data = await responce.json();
  const latitude = data[0].lat;
  const longitude = data[0].lon;

  return { latitude, longitude };
}
