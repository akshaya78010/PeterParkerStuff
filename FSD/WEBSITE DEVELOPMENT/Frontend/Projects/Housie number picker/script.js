var num;
var mpp = new Map();
var arr = [];
let row = "";
var numberd;
var element = document.getElementById("display-order");
var order_button = document.getElementById("order-button");
var current_number = document.getElementById("current_number");
var td_cells = document.getElementsByTagName("td");

//generate a number

function generateNumber() {
  num = Math.floor(Math.random() * 90) + 1;
  if (!mpp.get(num)) {
    mpp.set(num, 1);
    numberd = document.getElementById(String(num));
    numberd.style.backgroundColor = "red";
    current_number.innerText = num;
    row += num;
    row += ">>";
    arr.push(num);
    console.log(num + "\n");
  } else {
    generateNumber();
  }

  element.innerText = row;
}

function print_order() {
  element.innerText = row;
  if (element.style.display == "none" || element.style.display == "") {
    element.style.display = "block";
    order_button.innerText = "close";
  } else {
    element.style.display = "none";
    if (order_button.innerText == "close") {
      order_button.innerText = "order";
    }
  }
}

function next() {
  if (mpp.size <= 90) {
    if (mpp.size < 90) {
      generateNumber();
    } else {
      alert("All Done!");
      reset_board();
    }
  }
}

if (mpp.size == 90) {
  console.log(row);
  console.log();
  console.log(arr.join(" -> "));
}

function reset_board() {
  for (var i = 0; i < td_cells.length; i++) {
    td_cells[i].style.backgroundColor = "white";
  }

  mpp.clear();
  arr = [];
  current_number.innerText = "None";
  element.innerText = "";
}
