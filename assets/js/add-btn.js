const addBtn = document.querySelector(".plus-container > a");
const plus = document.querySelector(".plus-container > div:nth-child(1)");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  plus.classList.toggle("active");
});
