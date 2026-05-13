function submit() {
  const FULLNAME = document.getElementById("fullName").value;
  const PHONENUMBER = document.getElementById("phoneNumber").value;
  const EMAIL = document.getElementById("email").value;
  const PASSWORD = document.getElementById("password").value;

  console.log(FULLNAME);
  console.log(PHONENUMBER);
  console.log(EMAIL);
  console.log(PASSWORD);

  document.getElementById("fullName").value = "";

  document.getElementById("phoneNumber").value = "";

  document.getElementById("email").value = "";

  document.getElementById("password").value = "";
  alert("are you sure")

}
