var observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

const boxItems = document.querySelectorAll(".box-container > div");
boxItems.forEach((item) => {
  observer.observe(item);
});
