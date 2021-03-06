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

  document.querySelector(".btn-more--hero")
    .addEventListener("click", function() {
        if (heroInfo.clientHeight < heroInfo.scrollHeight) {
          heroInfo.style.maxHeight =
            heroInfo.scrollHeight + "px";
          this.innerHTML =
            '<img class="btn-more__icon" src="./assets/images/expand-up.svg" alt="?????????????? ?????????????? ??????????">????????????';
          if (window.innerWidth > 767) {
            showMaxHeight(heroInfo, 400)
          } else {
            showMaxHeight(heroInfo, 500)
          }
        } else {
          this.innerHTML =
            '<img class="btn-more__icon" src="./assets/images/expand.svg" alt="?????????????? ?????????????? ????????">???????????? ??????????';
          if (window.innerWidth >= 1120) {
            hideMaxHeight(heroInfo, 165, 100)
          } else if (window.innerWidth < 768) {
            hideMaxHeight(heroInfo, 90, 10)
          } else {
            hideMaxHeight(heroInfo, 160, 250)
          }
        }
      }
    );

  let i;

  for (i = 1; i < btnMoreList.length; i++) {
    btnMoreList[i].addEventListener("click", function () {
      let panel = this.previousElementSibling;
      if (panel.clientHeight < panel.scrollHeight) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.innerHTML =
          '<img class="btn-more__icon" src="./assets/images/expand-up.svg" alt="?????????????? ?????????????? ??????????">????????????';
      } else {
        panel.style.maxHeight = "160px";
        this.innerHTML =
          '<img class="btn-more__icon" src="./assets/images/expand.svg" alt="?????????????? ?????????????? ????????">???????????????? ??????';
      }
    });

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

  btnBurger.addEventListener("click", () => {
    displayBlock(mobileMenu, "visin");
    document.lastChild.style.overflow = "hidden";
  });
  btnMenuClose.addEventListener("click", () => {
    displayHidden(mobileMenu, "visin");
    document.lastChild.style.overflow = "auto";
  });

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

  function displayBlock(item, classname) {
    return item.classList.add(classname);
  }

  function displayHidden(item, classname) {
    return item.classList.remove(classname);
  }

  function hideMaxHeight(elem,heightSize, delay = 0){
    elem.style.maxHeight = heightSize + 'px';
    setTimeout(() => {
      elem.style.overflow = "hidden";
    }, delay);
  }

  function showMaxHeight(elem, delay){
    setTimeout(() => {
      elem.style.overflow = "visible";
    }, delay);
  }


});
