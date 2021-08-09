var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        
        thumbs: {
          swiper: swiper,
        },
      });
      const menuBTN = document.querySelector(".menu-button");
      const menu = document.querySelector(".navbar-panel");
      const closeBTN = document.querySelector(".krest");
      menuBTN.addEventListener("click",() =>{
        menu.classList.toggle("is-open");
      })
      closeBTN.addEventListener("click",() =>{
        menu.classList.toggle("is-open");
      })