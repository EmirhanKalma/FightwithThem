const ueban = document.getElementById("ueban");
const huina = document.getElementById("huina");
const huinishki_in = document.getElementById("huinishki_in");
let x = 200;
let y = 200;

const speedo = 30;
speed_ebanat = 30;

window.addEventListener("DOMContentLoaded", function () {
  for (i = 0; i < 10; i++) {
    let huinishki = document.createElement("div");
    huinishki.className = "huinishki";
    huinishki_in.appendChild(huinishki);
  }
});

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
    let x_block = x;
    let y_block = y + 30;
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
      let enemies = document.querySelectorAll(".huinishki");
      let bulletBox = block.getBoundingClientRect();
      for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        let enemyBox = enemy.getBoundingClientRect();
        if (
          bulletBox.right >= enemyBox.left &&
          bulletBox.left <= enemyBox.right &&
          bulletBox.bottom >= enemyBox.top &&
          bulletBox.top <= enemyBox.bottom
        ) {
          enemy.remove();
          block.remove();
          clearInterval(bulletTimer);
          break;
        }
      }
    }, 20);
  }
  ueban.style.left = x + "px";
  ueban.style.top = y + "px";
});
