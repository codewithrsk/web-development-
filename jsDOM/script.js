function Submit() {
  console.log("Submit Button Clicked");
  const fn = document.getElementById("fullname").value;
  console.log(fn);
  document.getElementById("myData").innerText = fn;

  document.getElementById("dataCard").classList.remove("divHide");
  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("fullname").value = "";
}
