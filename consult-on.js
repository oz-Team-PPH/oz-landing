// 모바일 토글 메뉴
const toggle = document.getElementById("navbarToggle");
const menu = document.querySelector(".navbar__menu");
const actions = document.querySelector(".navbar__actions");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  actions.classList.toggle("active");
});
