function Bulb1ON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}
function Bulb1OFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
function Red() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function Green() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

function Yellow() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

document
  .getElementById("bulb1Color")
  .addEventListener("change", ChangeBulbColor);

  function ChangeBulbColor() {
  const color = document.getElementById("bulb1Color").value;
  document.getElementById("bulb1").style.backgroundColor = color;
}
