async function GetNewJoke() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";

  const responce = await fetch(API_URL);
  const data = await responce.json();
  console.log(data);

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("delivery").innerText = data.punchline;
}
