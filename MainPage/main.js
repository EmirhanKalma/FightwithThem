const ueban = document.getElementById("ueban");
const huina = document.getElementById("huina");
let x = 200;
let y = 200;

const speedo = 30;
speed_ebanat = 30;

window.addEventListener("keydown", function () {
  if (event.key == "w") {
    if (y <= 0) {
    } else {
      y -= speedo;
    }
  }
  if (event.key == "a") {
    if (x <= 0) {
    } else {
      x -= speedo;
    }
  }
  if (event.key == "s") {
    if (y >= 380) {
    } else {
      y += speedo;
    }
  }
  if (event.key == "d") {
    if (x >= 1250) {
    } else {
      x += speedo;
    }
  }
  if (event.key == " ") {
    let block = document.createElement("div");
    block.className = "ebanat";
    let x_block = x ;
    let y_block = y;
    block.style.left = x_block + "px";
    block.style.top = y_block + "px";
    huina.appendChild(block);
    let bulletTimer = setInterval(function () {
      x_block += speed_ebanat; 
      block.style.left = x_block + "px";
      if (x_block >= 1280) {
        clearInterval(bulletTimer); 
        block.remove(); 
      }
    }, 20);
  }
  ueban.style.left = x + "px";
  ueban.style.top = y + "px";
});
