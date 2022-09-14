let menuHaut = document.getElementById('menuHaut');
let drop = document.getElementById('drop');
menuHaut.style.height = 0;
drop.addEventListener('click',()=>{
    menuHaut.style.height = '270px';
})
let close = document.getElementById('close');
close.addEventListener('click',()=>{
    menuHaut.style.height = 0;
})
let supprim = document.getElementById('supprim');
let supp = document.getElementById('supp');
supprim.addEventListener('click',()=>{
    supp.remove();
})

/* ========== Initialize Swiper ========== */

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });