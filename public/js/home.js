const API_URL =
  "https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/tickers";

const card_table = document.getElementById("stocks_details");

card_table.innerHTML = "";
const column = document.createElement("tr");
column.innerHTML = `
    <th>#</th>
    <th>Name</th>
    <th>Last Trade</th>
    <th>Buy/Sell Price</th>
    <th>Volume</th>
    <th>Base_Unit</th>`;

card_table.appendChild(column);
var id=1;


const createCard = (keys) => {
  keys.forEach((item) => {
    // console.log(item);


    const card = document.createElement("tr");

    card.innerHTML = `

        <td>${id}</td> 
        <td>${item.name} </td>
        <td>${item.last}</td>
        <td>${item.buy}/${item.sell}</td> 
        <td>${item.volume}</td> 
        <td>${item.base_unit}</td>`;
        id++;

    card_table.appendChild(card);
  });
};

// Defining async function
async function getStocks(url) {
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  //   console.log(typeof data);

  // console.log(data);

   show(data);
}
// Calling that async function
getStocks(API_URL);

// Function to define innerHTML for HTML table
function show(data) {



  var arr = [],
    keys = Object.keys(data);
  for (var i = 0, n = keys.length; i < n; i++) {
    var key = keys[i];
    arr[key] = data[key];
  }

  // var obj = data;
  // var result = Object.entries(obj);

  //   console.log(data);
  console.log(arr.btcinr);

  createCard([
    arr.btcinr,
    arr.xrpinr,
    arr.ethinr,
    arr.trxinr,
    arr.eosinr,
    arr.zilinr,
    arr.batinr,
    arr.zrxinr,
    arr.reqinr,
    arr.nulsinr,
  ]);

  //   console.log(tab);
  //   document.getElementById("stocks_details").innerHTML = tab;

  // Loop to access all rows
  //     for (let i in keys) {
  //         console.log(i);
  //         tab += `<tr>
  //     <td>${data[keys[6]]} </td>
  //     <td>${r.last}</td>
  //     <td>${r.buy}/${r.sell}</td>
  //     <td>${r.volume}</td>
  //     <td>${r.base_unit}</td>
  // </tr>`;
  //     }
  // Setting innerHTML as tab variable
}
