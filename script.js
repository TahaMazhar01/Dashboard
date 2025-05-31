const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", (e) => {
  document.body.classList.toggle("collapsed");
  e.currentTarget.classList.toggle("fa-chevron-right");
  e.currentTarget.classList.toggle("fa-chevron-left");
})