let currentNumber = document.getElementById("num");
let val = parseInt(currentNumber.textContent);
document.getElementById("increase").onclick = function () {
  currentNumber.textContent = val + 1;
  val = val+1;
};

document.getElementById("decrease").onclick = function () {
  currentNumber.textContent = val - 1;
  val = val - 1
};

document.getElementById("reset").onclick = function () {
  currentNumber.textContent = 0;
  val = 0;
};
