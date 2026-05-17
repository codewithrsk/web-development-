function getdatafromlocalstroage() {
  const data = JSON.parse(localStorage.getItem("dataPacket")) || [];

  if (data <= 0) {
    document.getElementById("passwordData").innerHTML = ` <tr>
              <td colspan="3">No Data To Show</td>
            </tr>`;
    return;
  }
  console.log(data);

  data.forEach((element) => {
    const TR = document.createElement("tr");
    TR.innerHTML = `<tr>
              <td>${element.siteName}</td>
              <td>${element.username}</td>
              <td>${element.Password}</td>              
            </tr>`;

    passwordData.appendChild(TR);
  });

  //   document.getElementById("passwordData").innerHTML=`<tr>
  //               <td>${data.siteName}</td>
  //               <td>${data.username}</td>
  //               <td>${data.Password}</td>
  //             </tr>`;
}

getdatafromlocalstroage();
