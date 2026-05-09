document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const curDate = document.getElementById("CurrentDate").value;

  let age = Number(curDate.split("-")[0]) - Number(dob.split("-")[0]);

  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";
  document.getElementById("MyAge").innerText = age;
  alert("are You Soure")
});
