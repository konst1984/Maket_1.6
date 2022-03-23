"use strict"
document.addEventListener("DOMContentLoaded", () => {

    const sliderBrands = document.querySelector('.swiper-brands');
    const sliderTypes = document.querySelector('.swiper-types')

    let swiperBrands;
    let swiperTypes;


   // let winWith = window.innerWidth;


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        speed: 600,
        spaceBetween: 16,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
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


    function mobileSliderBrands () {

        if(window.innerWidth <= 767 ) {
            swiperBrands = new Swiper(sliderBrands, {
                // Optional parameters
                speed: 600,
                spaceBetween: 16,
                slidesPerView: "auto",
                slidesPerGroup: 1,
                slideToClickedSlide: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
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
                freeMode: true,
            });

            sliderBrands.dataset.mobile ="true";
        }

        if(window.innerWidth > 767){

            if(sliderBrands.classList.contains('swiper-initialized')) {
                swiperBrands.destroy();
            }
        }
    }


    function mobileSliderTypes () {

        if( window.innerWidth <= 767 ) {
            swiperTypes = new Swiper(sliderTypes, {
                // Optional parameters
                speed: 600,
                spaceBetween: 16,
                slidesPerView: "auto",
                // slidesPerGroup: 2,
                slideToClickedSlide: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
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
                freeMode: true,
            });


        }

        if(window.innerWidth > 767){
            if(sliderTypes.classList.contains('swiper-initialized')) {
                swiperTypes.destroy();
            }
        }
    }


    mobileSliderBrands();
    mobileSliderTypes();
    window.addEventListener('resize', () => {
        mobileSliderBrands();
    });
    window.addEventListener('resize', () => {
        mobileSliderTypes();
    });





    const btnMoreList = document.querySelectorAll('.btn-more')
    const heroInfo = document.querySelector('.hero-info');

    let i;

    for (i = 0; i <  btnMoreList.length; i++) {
        btnMoreList[i].addEventListener("click", function() {
            let panel = this.previousElementSibling;
            if (panel.clientHeight < panel.scrollHeight){
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                panel.style.maxHeight = "160px";
            }
        });
    }



    const btnBurger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const btnMenuClose = document.querySelector('.btn-close');
    const btnCall = document.querySelectorAll('.btn-call');
    const btnChat = document.querySelectorAll('.btn-chat');
    const feedbackSection = document.querySelector('.modal--feedback');
    const feedbackCloseBtn = document.querySelector('.btn-close--feedback');
    const backgroundOpacity  =  document.querySelector('.background-opacity');
    const connectCloseBtn = document.querySelector('.btn-close--connect');
    const connectSection = document.querySelector('.modal--connect');


    function displayBlock(item, classname) {
        return item.classList.add(classname)
    }

    function displayHidden(item, classname) {
        return item.classList.remove(classname)
    }

    btnBurger.addEventListener('click', () => displayBlock(mobileMenu, 'visin'));
    btnMenuClose.addEventListener('click', () => displayHidden(mobileMenu, 'visin'));

    for(let btn of btnCall) {
        btn.addEventListener('click', () => openSection(connectSection));
    }

    connectCloseBtn.addEventListener('click', () => closeSection(connectSection));

    for(let btn of btnChat) {
        btn.addEventListener('click', () => openSection(feedbackSection));
    }

    feedbackCloseBtn.addEventListener('click', () => closeSection(feedbackSection));

    function closeSection(elem) {
        displayHidden(backgroundOpacity,'block-opacity');
        displayHidden(elem,'modal-transform');
        displayBlock(elem,'hidden');
    }
    function openSection(elem ) {
        displayBlock(backgroundOpacity,'block-opacity');
        displayHidden(mobileMenu, 'visin');
        setTimeout(() => {
            displayHidden(elem,'hidden')
            displayBlock(elem,'modal-transform')
        },500)
    }
})

