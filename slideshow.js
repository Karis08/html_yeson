// 이미지 슬라이드쇼에 사용될 이미지들을 가져옵니다.
var slides = document.querySelectorAll("#slides > img");

// 이전 버튼과 다음 버튼을 가져옵니다.
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// 현재 슬라이드의 인덱스를 나타내는 변수를 초기화합니다.
var current = 0;

// 이미지가 자동으로 변경되는 간격을 설정하는 변수를 초기화합니다. (여기서는 3초)
var slideInterval = setInterval(nextSlide, 3000);

// 초기에 첫 번째 슬라이드를 표시합니다.
showSlides(current);

// 이전 버튼과 다음 버튼에 클릭 이벤트를 추가합니다.
prev.onclick = prevSlide;
next.onclick = nextSlide;

// 주어진 인덱스에 해당하는 슬라이드를 보여주는 함수입니다.
function showSlides(n) {
  // 모든 슬라이드를 숨깁니다.
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // 주어진 인덱스의 슬라이드를 표시합니다.
  slides[n].style.display = "block";
}

// 이전 슬라이드를 표시하는 함수입니다.
function prevSlide() {
  // 현재 슬라이드의 인덱스가 0보다 크면 이전 슬라이드로 이동합니다.
  if (current > 0) 
    current -= 1;
  else
    // 현재 슬라이드가 첫 번째 슬라이드인 경우, 마지막 슬라이드로 이동합니다.
    current = slides.length - 1;
  showSlides(current);
}

// 다음 슬라이드를 표시하는 함수입니다.
function nextSlide() {
  // 현재 슬라이드의 인덱스가 슬라이드 배열의 마지막 인덱스보다 작으면 다음 슬라이드로 이동합니다.
  if (current < slides.length - 1) 
    current += 1;
  else
    // 현재 슬라이드가 마지막 슬라이드인 경우, 첫 번째 슬라이드로 이동합니다.
    current = 0;
  showSlides(current);
}

// 슬라이드를 일시 정지하는 함수입니다.
function pauseSlide() {
  clearInterval(slideInterval);
}

// 슬라이드를 다시 시작하는 함수입니다.
function resumeSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}

// 마우스를 슬라이드 영역 위로 올렸을 때 슬라이드를 멈추는 이벤트를 추가합니다.
document.getElementById('slides').addEventListener('mouseover', pauseSlide);

// 마우스를 슬라이드 영역에서 떼었을 때 슬라이드를 다시 시작하는 이벤트를 추가합니다.
document.getElementById('slides').addEventListener('mouseout', resumeSlide);
