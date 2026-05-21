function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 3) {
        reject("Query Not Found")
      } else {
        console.log("data Sent ", value);
        resolve("over solved");
      }
    }, 1000);
  });
}

getData(1)
  .then(() => getData(2))
  .then(() => getData(3))
  .then(() => getData(4))
  .then(() => getData(5));
