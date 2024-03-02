let inputField = document.getElementById("screen");

function display(value) {
  inputField.value += value;
}

function clearScreen() {
  inputField.value = "";
}

function calculate() {
  document.getElementById("screen").value = eval(
    document.getElementById("screen").value
  );
}
