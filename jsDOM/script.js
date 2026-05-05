function Submit() {
  console.log("Submit Button Clicked");
  const fn = document.getElementById("fullname").value;
  console.log(fn);
  const fn1 = document.getElementById("phone").value;
  console.log(fn1);
  const fn2 = document.getElementById("mail").value;
  console.log(fn2);
  const fn3 = document.getElementById("age").value;
  console.log(fn3);
  const fn4 = document.getElementById("country").value;
  console.log(fn4);
  

  document.getElementById("myData1").innerText = fn;
  document.getElementById("myData2").innerText = fn1;
  document.getElementById("myData3").innerText = fn2;
  document.getElementById("myData4").innerText = fn3;
  document.getElementById("myData5").innerText = fn4;

  document.getElementById("dataCard").classList.remove("divHide");
  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("fullname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("age").value = "";
  document.getElementById("country").value = "";
}
