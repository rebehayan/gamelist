const linkEl = document.querySelectorAll(".game-list a");
const active = document.querySelector(".--active");

const removeClass = () => {
  linkEl.forEach((a) => {
    a.classList.remove("--active");
  });
};

linkEl.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    removeClass();
    a.classList.toggle("--active");
  });
});
