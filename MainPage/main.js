const ueban = document.getElementById("ueban");

let x = 200;
let y = 200;

const speedo = 10;

window.addEventListener("keydown", function () {
  if (event.key == "w") {
    y -= speedo;
  }
  if (event.key == "a") {
    x -= speedo;
  }
  if (event.key == "s") {
    y += speedo;
  }
  if (event.key == "d") {
    x += speedo;
  }
  ueban.style.left = x + "px";
  ueban.style.top = y + "px";
});
