document.addEventListener("DOMContentLoaded", () => {

  const country1 = document.getElementById("country1");
  const country2 = document.getElementById("country2");

  const flag1 = document.getElementById("flag1");
  const flag2 = document.getElementById("flag2");

  const orgAmount = document.getElementById("orgAmount");

  const convertBtn = document.getElementById("convertBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");

  const result = document.getElementById("result");

  const swapBtn = document.getElementById("swapBtn");

  const error1 = document.getElementById("error1");
  const error2 = document.getElementById("error2");
  const errorAmount = document.getElementById("errorAmount");

  fetch("codes.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load countries");
      }

      return response.json();
    })

    .then((data) => {
      const seen = new Set();

      data.forEach((country) => {
        if (!country.Currency_Code || !country.Country_Code) return;

        const key = `${country.Currency_Code}-${country.Country_Code}`;

        if (!seen.has(key)) {
          seen.add(key);

          const option1 = document.createElement("option");

          option1.value = `${country.Currency_Code},${country.Country_Code}`;

          option1.textContent = `${country.Country} (${country.Currency_Code})`;

          const option2 = option1.cloneNode(true);

          country1.appendChild(option1);
          country2.appendChild(option2);
        }
      });

      
      country1.value = "USD,US";
      country2.value = "INR,IN";

      updateFlag(flag1, "US");
      updateFlag(flag2, "IN");
    })

    .catch((error) => {
      console.error(error);

      result.className = "text-center text-danger fw-bold fs-4 mt-4";

      result.textContent = "Failed to load country data.";
    });

  function updateFlag(imgElement, countryCode) {
    imgElement.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

    imgElement.onerror = () => {
      imgElement.src =
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
    };
  }

  function hideErrors() {
    error1.classList.add("d-none");
    error2.classList.add("d-none");
    errorAmount.classList.add("d-none");
  }
  

  function validate() {
    hideErrors();

    
    if (!country1.value) {
      error1.classList.remove("d-none");

      return false;
    }

    
    if (!country2.value) {
      error2.classList.remove("d-none");

      return false;
    }

    
    const amount = parseFloat(orgAmount.value);

    if (orgAmount.value.trim() === "") {
      errorAmount.textContent = "Please enter an amount.";

      errorAmount.classList.remove("d-none");

      return false;
    }

    if (isNaN(amount) || amount <= 0) {
      errorAmount.textContent = "Amount must be greater than zero.";

      errorAmount.classList.remove("d-none");

      return false;
    }

    return true;
  }

  

  async function convertCurrency() {
    if (!validate()) return;

    
    convertBtn.disabled = true;

    btnText.textContent = "Loading...";

    spinner.classList.remove("d-none");

    result.textContent = "";

    const fromCurrency = country1.value.split(",")[0].toLowerCase();

    const toCurrency = country2.value.split(",")[0].toLowerCase();

    const amount = parseFloat(orgAmount.value);

    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`,
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      if (!data[fromCurrency] || !data[fromCurrency][toCurrency]) {
        throw new Error("Currency rate not found");
      }

      const rate = data[fromCurrency][toCurrency];

      const convertedAmount = amount * rate;

      
      result.className = "text-center text-success fw-bold fs-4 mt-4";

      result.textContent =
        `${amount} ${fromCurrency.toUpperCase()} = ` +
        `${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
    } catch (error) {
      console.error(error);

      result.className = "text-center text-danger fw-bold fs-4 mt-4";

      result.textContent = "Something went wrong. Please try again.";
    } finally {
      
      convertBtn.disabled = false;

      btnText.textContent = "Convert";

      spinner.classList.add("d-none");
    }
  }

  country1.addEventListener("change", () => {
    const countryCode = country1.value.split(",")[1];

    updateFlag(flag1, countryCode);

    hideErrors();
  });

  country2.addEventListener("change", () => {
    const countryCode = country2.value.split(",")[1];

    updateFlag(flag2, countryCode);

    hideErrors();
  });

  swapBtn.addEventListener("click", () => {
    const temp = country1.value;

    country1.value = country2.value;

    country2.value = temp;

    updateFlag(flag1, country1.value.split(",")[1]);

    updateFlag(flag2, country2.value.split(",")[1]);

    hideErrors();

    if (orgAmount.value.trim() !== "") {
      convertCurrency();
    }
  });

  convertBtn.addEventListener("click", convertCurrency);

  orgAmount.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      convertCurrency();
    }
  });
});