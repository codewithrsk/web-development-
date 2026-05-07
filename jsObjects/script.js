let fd = [
  ["raj verdhan", "18-11-1997", 7340862969, "Bhopal", "Teacher"],
  ["pranay Das", "18-11-1997", 7340862969, "Bhopal", "Teacher"],
  ["raj verdhan", "18-11-1997", 7340862969, "Bhopal", "Teacher"],
  ["raj verdhan", "18-11-1997", 7340862969, "Bhopal", "Teacher"],
];

fd.forEach((element) => {
  console.log(element[4]);
});

let fData = [
  {
    name: "Aarav Sharma",
    dob: "12-03-1998",
    phone: 9876543210,
    city: "Delhi",
    profession: "Engineer",
  },
  {
    name: "Priya Verma",
    dob: "25-07-1995",
    phone: 9123456780,
    city: "Mumbai",
    profession: "Designer",
  },
  {
    name: "Rohan Mehta",
    dob: "09-11-2000",
    phone: 9988776655,
    city: "Pune",
    profession: "Developer",
  },
  {
    name: "Sneha Patel",
    dob: "18-01-1997",
    phone: 9012345678,
    city: "Ahmedabad",
    profession: "Teacher",
  },
];

let studentData = {
  name: "mohini",
  city: "ganj basoda",
  marks: {
    eng: 65,
    hin: 87,
    Math: 89,
    science: 50,
  },
};

fData.forEach((e) => console.log(e["profession"]));
console.log("map");

fData.map((e, ind) => {
  console.log(ind);

  console.log(e);
});
let arr2 = [12, 23, 34, 45, 56, 67, 78, 89, 90, 12];

console.log(fData);
console.log(fData[1]["name"]);
console.log(fData[1].city);
console.log(studentData.marks.Math);
console.log(studentData.marks.eng);
console.log(Object.keys(studentData));
console.log(Object.values(studentData));
console.log(Object.entries(studentData));
console.log(arr2.filter((val) => val > 20));

console.log(arr2);

console.log(arr2.slice(4, 6));

let ab = "this is web-deblopment class";

console.log(ab);

console.log(ab.split(" "));
console.log(ab.split("-"));
arr2.forEach((index, num) => {
  console.log(num, index);
});

let a = "This is a String";
console.log(a.charAt(1));
console.log(a.toUpperCase());
console.log(a.toLowerCase());




