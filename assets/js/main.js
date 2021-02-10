let result = document.getElementById("display");
let body = document.getElementById("body");
let index = document.getElementById("index");
function display() {
  index.innerHTML = result.value;
  if (result.value >= 0 && result.value <= 50) {
    body.style.backgroundColor = "lightgreen";
  } else if (result.value >= 51 && result.value <= 100) {
    body.style.backgroundColor = "yellow";
  } else if (result.value >= 101 && result.value <= 150) {
    body.style.backgroundColor = "orange";
  } else if (result.value >= 151 && result.value <= 200) {
    body.style.backgroundColor = "red";
  } else if (result.value >= 201 && result.value <= 300) {
    body.style.backgroundColor = "purple";
  } else if (result.value >= 301 && result.value <= 500) {
    body.style.backgroundColor = "blue";
  }
}

display();

// if (result.value > 0 && result.value <= 50) {
//   body.style.backgroundColor = "lightgreen";
// } else if (result.value >= 51 && result.value <= 100) {
//   body.style.backgroundColor = "yellow";
// } else if (result.value >= 101 && result.value <= 150) {
//   body.style.backgroundColor = "orange";
// } else if (result.value >= 151 && result.value <= 200) {
//   body.style.backgroundColor = "red";
// } else if (result.value >= 201 && result.value <= 300) {
//   body.style.backgroundColor = "purpil";
// } else if (result.value >= 301 && result.value <= 500) {
//   body.style.backgroundColor = "blue";
// }
