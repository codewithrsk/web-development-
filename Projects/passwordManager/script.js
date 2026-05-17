document.getElementById("pmform").addEventListener("submit", (element) => {
  element.preventDefault();

  const SiteName = document.getElementById("siteName").value;
  const UserName = document.getElementById("username").value;
  const Password = document.getElementById("Password").value;

  const DataPacket = {
    siteName: SiteName,
    username: UserName,
    Password: Password,
  }
  dataLocalStroage(DataPacket);
  document.getElementById("siteName").value = "";
  document.getElementById("username").value = "";
  document.getElementById("Password").value = "";
});

function dataLocalStroage(data) {
  const olddata = JSON.parse(localStorage.getItem("dataPacket")) || [];
  console.log(olddata);

  olddata.push(data);
  console.log("string", olddata);

  localStorage.setItem("dataPacket", JSON.stringify(olddata) );
}

document.getElementById("pmform").addEventListener("reset", (element) => {
  element.preventDefault();

  document.getElementById("siteName").value = "";
  document.getElementById("username").value = "";
  document.getElementById("Password").value = "";
});
