function getData(value, nextData) {
  setTimeout(() => {
    console.log("Getting Data", value);

    if (nextData) {
      nextData();
    }
  }, 3000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        getData(5);
      });
    });
  });
});