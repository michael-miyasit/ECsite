'use strict';

{

  function play() {
      setTimeout(() => {
    images[currentIndex].classList.remove('current');
    currentIndex++;
    if (currentIndex > images.length - 1) {
      currentIndex = 0;
    }
    images[currentIndex].classList.add('current');
    play();
  }, 5000);
  }
  const images = document.querySelectorAll('.hero img');

  let currentIndex = 0;

  play();
}


{// モーダルウィンドウ
  const modalButtons = document.querySelectorAll(".modalButton");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

// モーダルウィンドウを開くボタンにイベントリスナーを追加
modalButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

// 閉じるボタンにイベントリスナーを追加
closeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const modal = button.closest(".modal");
    modal.style.display = "none";
  });
});

// モーダルの外側をクリックしてもモーダルを閉じる
window.addEventListener("click", function(event) {
  modals.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

}



  {// スライダー
    $('.modal-content_productSlider').slick({
      // arrows: true,
      slidesToShow:1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,

      // prevArrow:'<div class="prev"><i class="fa-solid fa-chevron-left"></i></div>',
      // nextArrow:'<div class="next"><i class="fa-solid fa-chevron-right"></i></div>'
      prevArrow:'<div class="prev"></div>',
      nextArrow:'<div class="next"></div>'
    }); 
  };

  