document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = document.getElementById("billAmount").value;
  const Discount = document.getElementById("disCount").value;
  const TotalPeople = document.getElementById("totalPersons").value;
  console.log(amount);

  const totalTip = Number(amount) * Number(Discount);
  console.log(totalTip);

  const tipPerPerson = Number(totalTip) / Number(TotalPeople);

  document.getElementById("billAmount").value ="";

  document.getElementById("disCount").value="";

  document.getElementById("totalPersons").value="";

    document.getElementById("tipAmount").innerText = tipPerPerson;




});
