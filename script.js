"use strict";

const gridLayout = document.querySelectorAll(".grid-layout");
const buttons = document.querySelectorAll(".button");
const details = document.querySelectorAll(".details");

// KIỂM TRA TÍNH HỢP LỆ CỦA EMAIL
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector(".btn").addEventListener("click", function () {
  if (regex.test(document.querySelector(".email").value)) {
    document.querySelector(".hidden-info").classList.remove("hide");
    document.querySelector(".enter-email").classList.add("hide");
  } else {
    alert("Email entered invalid!");
  }
});

// NÚT VIEW MORE HIỆN LÊN VÀ STYLE KHI DI CHUỘT QUA
for (let i = 0; i < gridLayout.length; i++) {
  gridLayout[i].addEventListener("mouseover", function () {
    buttons[i].classList.remove("hide");
    gridLayout[i].classList.add("shadow");
  });
}

for (let i = 0; i < gridLayout.length; i++) {
  gridLayout[i].addEventListener("mouseout", function () {
    buttons[i].classList.add("hide");
    gridLayout[i].classList.remove("shadow");
  });
}

// PHẦN THÔNG TIN HIỆN LÊN VÀ NÚT VIEW MORE CHUYỂN THÀNH VIEW LESS KHI CLICK CHUỘT VÀO NÚT VIEW MORE
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    details[i].classList.toggle("hide");
    buttons[i].textContent =
      buttons[i].textContent === "▼ VIEW MORE" ? "▲ VIEW LESS" : "▼ VIEW MORE";
  });
}
