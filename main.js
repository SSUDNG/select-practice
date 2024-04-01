const body = document.querySelector("body");
const wrap = document.querySelector(".wrap");
const selectBox = document.querySelector(".selectBox");
const selectedDisplay = document.querySelector(".selectedDisplay");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");

selectBox.addEventListener("click", () => {
  selectBox.classList.toggle("open");
  options.classList.toggle("open");
  resize();
});

body.addEventListener("click", (event) => {
  if (!event.target.closest(".wrap")) {
    selectBox.classList.remove("open");
    options.classList.remove("open");
  }
});
option.forEach((selected) => {
  selected.addEventListener("click", (event) => {
    selectedDisplay.textContent = event.target.textContent;
    selectBox.classList.remove("open");
    options.classList.remove("open");
  });
});

function resize() {
  const windowHeight = window.innerHeight;
  const rect = selectBox.getBoundingClientRect();
  const selectBoxY = rect.bottom + options.clientHeight;
  if (selectBoxY > windowHeight) {
    wrap.classList.add("up");
  } else {
    wrap.classList.remove("up");
  }
}

window.addEventListener("resize", resize);
window.addEventListener("scroll", resize);
