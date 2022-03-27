"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const brands = document.querySelector(".brands");

  const sliderBrands = document.querySelector(".swiper-brands");
  const sliderTypes = document.querySelector(".swiper-types");

  let swiperBrands;
  let swiperTypes;

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    speed: 600,
    spaceBetween: 16,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    mousewheel: {
      invert: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  function mobileSliderBrands() {
    if (window.innerWidth <= 767 && sliderBrands.dataset.mobile === "false") {
      swiperBrands = new Swiper(sliderBrands, {
        speed: 600,
        spaceBetween: 16,
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        mousewheel: {
          invert: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      });

      sliderBrands.dataset.mobile = "true";
    }

    if (window.innerWidth > 767) {
      sliderBrands.dataset.mobile = "false";
      if (sliderBrands.classList.contains("swiper-initialized")) {
        swiperBrands.destroy();
      }
    }
  }

  function mobileSliderTypes() {
    if (window.innerWidth <= 767 && sliderTypes.dataset.mobile === "false") {
      swiperTypes = new Swiper(sliderTypes, {
        // Optional parameters
        speed: 600,
        spaceBetween: 16,
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        mousewheel: {
          invert: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      });

      sliderTypes.dataset.mobile = "true";
    }

    if (window.innerWidth > 767) {
      sliderTypes.dataset.mobile = "false";
      if (sliderTypes.classList.contains("swiper-initialized")) {
        swiperTypes.destroy();
      }
    }
  }

  mobileSliderBrands();
  mobileSliderTypes();
  window.addEventListener("resize", () => {
    mobileSliderBrands();
  });
  window.addEventListener("resize", () => {
    mobileSliderTypes();
  });

  const btnMoreList = document.querySelectorAll(".btn-more");
  const heroInfo = document.querySelector(".hero-info");

  document
    .querySelector(".btn-more--hero")
    .addEventListener("click", function () {
      if (heroInfo.clientHeight < heroInfo.scrollHeight) {
        heroInfo.style.maxHeight =
          document.querySelector(".hero-info").scrollHeight + "px";
        this.innerHTML =
          '<img class="btn-more__icon" src="./assets/images/expand-up.svg" alt="Двойная стрелка вверх">Скрыть';
        if (window.innerWidth > 767) {
          setTimeout(() => {
            heroInfo.style.overflow = "visible";
          }, 400);
        } else {
          setTimeout(() => {
            heroInfo.style.overflow = "visible";
          }, 500);
        }
      } else {
        this.innerHTML =
          '<img class="btn-more__icon" src="./assets/images/expand.svg" alt="Двойная стрелка вниз">Читать далее';
        if (window.innerWidth >= 1120) {
          heroInfo.style.maxHeight = "165px";
          setTimeout(() => {
            heroInfo.style.overflow = "hidden";
          }, 100);
        } else if (window.innerWidth < 768) {
          heroInfo.style.maxHeight = "90px";
          setTimeout(() => {
            heroInfo.style.overflow = "hidden";
          }, 1);
        } else {
          heroInfo.style.maxHeight = "160px";
          setTimeout(() => {
            heroInfo.style.overflow = "hidden";
          }, 250);
        }
      }
    });

  let i;
  for (i = 1; i < btnMoreList.length; i++) {
    btnMoreList[i].addEventListener("click", function () {
      let panel = this.previousElementSibling;
      console.log(panel.clientHeight);
      console.log(panel.scrollHeight);
      if (panel.clientHeight < panel.scrollHeight) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.innerHTML =
          '<img class="btn-more__icon" src="./assets/images/expand-up.svg" alt="Двойная стрелка вверх">Скрыть';
      } else {
        panel.style.maxHeight = "160px";
        this.innerHTML =
          '<img class="btn-more__icon" src="./assets/images/expand.svg" alt="Двойная стрелка вниз">Показать все';
      }
    });

    // }
  }

  const btnBurger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const btnMenuClose = document.querySelector(".btn-close");
  const btnCall = document.querySelectorAll(".btn-call");
  const btnChat = document.querySelectorAll(".btn-chat");
  const feedbackSection = document.querySelector(".modal--feedback");
  const feedbackCloseBtn = document.querySelector(".btn-close--feedback");
  const backgroundOpacity = document.querySelector(".background-opacity");
  const connectCloseBtn = document.querySelector(".btn-close--connect");
  const connectSection = document.querySelector(".modal--connect");

  function displayBlock(item, classname) {
    return item.classList.add(classname);
  }

  function displayHidden(item, classname) {
    return item.classList.remove(classname);
  }

  btnBurger.addEventListener("click", () => displayBlock(mobileMenu, "visin"));
  btnMenuClose.addEventListener("click", () =>
    displayHidden(mobileMenu, "visin")
  );

  for (let btn of btnCall) {
    btn.addEventListener("click", () => openSection(connectSection));
  }

  connectCloseBtn.addEventListener("click", () => closeSection(connectSection));

  for (let btn of btnChat) {
    btn.addEventListener("click", () => openSection(feedbackSection));
  }

  feedbackCloseBtn.addEventListener("click", () =>
    closeSection(feedbackSection)
  );

  function closeSection(elem) {
    displayHidden(backgroundOpacity, "block-opacity");
    displayHidden(elem, "modal-transform");
    displayBlock(elem, "hidden");
  }

  function openSection(elem) {
    displayBlock(backgroundOpacity, "block-opacity");
    displayHidden(mobileMenu, "visin");
    setTimeout(() => {
      displayHidden(elem, "hidden");
      displayBlock(elem, "modal-transform");
    }, 500);
  }
});
