"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        speed: 600,
        spaceBetween: 16,
        slidesPerView: 'auto',
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



    const btnMoreList = document.querySelectorAll('.btn-more')
    const gridList = document.querySelectorAll('.grid-list');
    const heroContent = document.querySelector('.hero-content');
    const heroInfo = document.querySelector('.hero-info');

    function toggleClass(item, className) {
        return item.classList.toggle(className);
    }

    let y = document.querySelector('.btn-more--hero')
    console.log()

    for (let i = 0; i < btnMoreList.length; i++) {

            btnMoreList[i].addEventListener('click', function () {
                let panel = this.previousElementSibling;

                if (panel.clientHeight + 1 >= panel.scrollHeight || panel.clientHeight === 600) {
                    if( window.innerWidth >= 768) {
                        panel.style.maxHeight = "165px";
                        panel.style.overflow = "hidden";
                        if(i===0){
                            document.querySelector('.content-wrapper').style.gap = "40px";
                            document.querySelector('.hero-content').style.width = "48%";
                            heroInfo.style.paddingRight = "10px";
                            document.querySelector('.hero-info__text').style.paddingRight = "0px";
                        }
                    }
                    else if( window.innerWidth === 320) {
                        panel.style.maxHeight = "90px";
                        panel.style.overflow = "hidden"
                    }
                    else {
                        panel.style.maxHeight = "160px";
                        panel.style.overflow = "hidden";
                    }

                    panel.scrollTop = 0;

                    if(i===0) {
                        this.innerHTML = '<img class="btn-more__icon" src="images/expand.svg" alt="Двойная стрелка вниз">Читать далее'
                    }
                    else{
                        this.innerHTML = '<img class="btn-more__icon" src="images/expand-up.svg" alt="Двойная стрелка вниз">Показать все';
                    }

                } else {
                    this.innerHTML = ' <img class="btn-more__icon" src="images/expand-up.svg" alt="Двойная стрелка вниз">Скрыть';
                    if(panel.scrollHeight > 600){
                        panel.style.maxHeight = "600px";
                        panel.style.overflow ="auto"
                        if(i===0 &&  window.innerWidth >= 768){
                            document.querySelector('.content-wrapper').style.gap = "15px";
                            document.querySelector('.hero-content').style.width = "51.5%";
                            heroInfo.style.paddingRight = "0px";
                            document.querySelector('.hero-info__text').style.paddingRight = "10px";
                        }
                    }
                    else {
                         panel.style.maxHeight = panel.scrollHeight + "px";
                         panel.style.overflow = "hidden";
                    }
                }
            })

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
