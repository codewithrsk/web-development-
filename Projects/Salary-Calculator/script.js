function checkGuess() {
  const Salary = document.getElementById("amount").value;
  console.log(Salary);

  const BasicSalary = Salary / 2;
  document.getElementById("Basic-Salary").innerText=BasicSalary;

  
}

