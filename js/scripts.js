"use strict";

// Elements
const menuBtn = document.querySelector(".header-toggle");
const menuList = document.querySelector(".header-list");
const overlay = document.querySelector(".overlay");

// Add logic to menu button
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("header-toggle--show");
  menuList.classList.toggle("header-list--show");
  overlay.classList.toggle("overlay--show");
});

overlay.addEventListener("click", function () {
  menuBtn.classList.remove("header-toggle--show");
  menuList.classList.remove("header-list--show");
  overlay.classList.remove("overlay--show");
});
