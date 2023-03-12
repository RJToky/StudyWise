const bgImg1 = document.querySelector(".bg.img-1");
const bgImg2 = document.querySelector(".bg.img-2");

window.addEventListener("scroll", () => {
  var y1 = window.scrollY / -100;
  bgImg1.style.top = `calc(var(--y) + ${y1}em)`;

  var y2 = window.scrollY / -100;
  bgImg2.style.top = `calc(var(--y) + ${y2}em)`;
});
