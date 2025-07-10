const menu = document.querySelector(".menu-btn");
const head = document.querySelector(".header-nav");
const close = document.querySelector(".close-icon");

menu.addEventListener("click", function () {
  head.style.top = "0%";
});

close.addEventListener("click", function () {
  head.style.top = "-100%";
});

const searchBtn = document.querySelector(".search-btn");
const searchModal = document.getElementById("search-modal");

searchBtn.addEventListener("click", function () {
  searchModal.style.display = "flex";
});

function closeSearch() {
  searchModal.style.display = "none";
}
