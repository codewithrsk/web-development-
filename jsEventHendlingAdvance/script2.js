document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("FullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(dataPacket);

  document.getElementById("FullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  confirm("Are Your Sure") && window.location.reload();
  //   if (confirm("Are your Sure")) {
  //     window.location.reload();
  //   }
});

document.addEventListener("keydown", (event) => {
  let keyPress = event.key;
  keyPress === "Escape" && window.location.reload();
});