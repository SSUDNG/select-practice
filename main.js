const body = document.querySelector("body");
const wrap = document.querySelector(".wrap");
const selectBox = document.querySelector(".selectBox");
const selectedDisplay = document.querySelector(".selectedDisplay");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
let isOpen = false;

selectBox.addEventListener("click", () => {
  selectBox.classList.toggle("open");
  isOpen = !isOpen; // isOpen 값을 toggle 합니다.
  isOpen && flip();
});

body.addEventListener("click", (event) => {
  if (!event.target.closest(".wrap")) {
    selectBox.classList.remove("open");
    isOpen = false;
  }
});

option.forEach((selected) => {
  selected.addEventListener("click", (event) => {
    selectedDisplay.textContent = event.target.textContent;
    event.target.classList.add("selected");
    option.forEach((other) => {
      if (other !== selected) {
        other.classList.remove("selected");
      }
    });
    selectBox.classList.remove("open");
    isOpen = false;
  });
});

function flip() {
  const windowHeight = window.innerHeight;
  const rect = selectBox.getBoundingClientRect();
  const selectBoxY = rect.bottom + options.clientHeight;
  console.log("flip 실행 중");
  if (selectBoxY > windowHeight) {
    wrap.classList.add("up");
  } else {
    wrap.classList.remove("up");
  }
}

window.addEventListener("flip", () => {
  isOpen && flip();
});
window.addEventListener("scroll", () => {
  isOpen && flip();
});
