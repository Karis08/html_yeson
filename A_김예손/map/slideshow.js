var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;
var slideInterval = setInterval(nextSlide, 3000); // 변경될 시간 간격 (여기서는 3초)

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if (current > 0) current -= 1;
  else
    current = slides.length - 1;
  showSlides(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else
    current = 0;
  showSlides(current);
}

function pauseSlide() {
  clearInterval(slideInterval); // 슬라이드 멈춤
}

function resumeSlide() {
  slideInterval = setInterval(nextSlide, 3000); // 슬라이드 재개
}

// 마우스를 올렸을 때 자동 슬라이드 멈추고, 마우스를 떼었을 때 재개
document.getElementById('slides').addEventListener('mouseover', pauseSlide);
document.getElementById('slides').addEventListener('mouseout', resumeSlide);
