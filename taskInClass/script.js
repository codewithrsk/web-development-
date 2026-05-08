document.getElementById("bgcolor").addEventListener("change", Changebg);

function Changebg() {
  const color = document.getElementById("bgcolor").value;
  document.getElementById("div1bd").style.backgroundColor = color;
}

document
  .getElementById("hecolor")
  .addEventListener("change", changehadingcolor);
function changehadingcolor() {
  const hcolor = document.getElementById("hecolor").value;
  document.getElementById("hc").style.color = hcolor;
}

document.getElementById("pacolor").addEventListener("change", Changehcolor);

function Changehcolor() {
  const color = document.getElementById("pacolor").value;
  document.getElementById("pc").style.color = color;
}

function reset() {
  window.location.reload();
}
