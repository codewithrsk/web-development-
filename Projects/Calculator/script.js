let display = document.getElementById("display");

let one = document.addEventListener("keydown", (event) => {
  console.log(event.key);
  
  if (event.key === "Enter") {
    calculate();
    return;
  }
  appendValue(event.key);
});

function append(one) {
  if (display.innerText === "0") {
    display.innerText = one;
  } else {
    display.innerText += one;
  }
}

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  let current = display.innerText;

  if (current.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = current.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
