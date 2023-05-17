console.log("DOM Project");

const body = document.body;
const slides = document.querySelectorAll(".slide");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

let activeSlide = 0;

function setBGtoBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setBGtoBody();

function setActiveSlide() {
  slides.forEach((slide, index) => {
    index === activeSlide
      ? slide.classList.add("active")
      : slide.classList.remove("active");
  });
}

rightBtn.addEventListener("click", () => {
  activeSlide += 1;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBGtoBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBGtoBody();
  setActiveSlide();
});
