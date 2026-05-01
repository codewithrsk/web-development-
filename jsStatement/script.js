let agg = 25;
if (agg >= 20) {
  console.log("you can Vote");
} else {
  console.log("you Can't vote ");
}
let marks = 75;
if (marks > 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("fail");
}
let user = "abcde";
let pass = "12345";

if (user === "abcde" && pass === "12345") {
  console.log("login Success");
} else {
  console.log("login failed");
}
let data;
let name="ravi";
data= name || "N/A"
console.log(data);

