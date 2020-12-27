
import '../scss/style.scss';
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);
if (screen.width < 768) {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        loop: true,
        slidesPerView: 'auto',
    });
}

let readMore = document.querySelector('.about__more');
let aboutTxt = document.querySelector('.about__block-txt');

readMore.addEventListener('click', function () {
    let readMoreText = readMore.textContent;
    if (readMoreText === 'Читать далее') {
        aboutTxt.classList.add('brands__list--open');
        readMore.textContent = 'Скрыть';
        readMore.classList.add('rotate');
    } else {
        aboutTxt.classList.remove('brands__list--open');
        readMore.textContent = 'Читать далее';
        readMore.classList.remove('rotate');
    }
});

let brandList = document.querySelector('.brands__list');
let brandButton = document.querySelector('.brands__more');

brandButton.addEventListener('click', function () {
    let buttonText = brandButton.textContent;
    if (buttonText === 'Показать все') {
        brandList.classList.add('brands__list--open');
        brandButton.textContent = 'Скрыть';
        brandButton.classList.add('rotate');
    } else {
        brandList.classList.remove('brands__list--open');
        brandButton.textContent = 'Показать все';
        brandButton.classList.remove('rotate');
    }
});

let technicsList = document.querySelector('.technics__list')
let technicsButton = document.querySelector('.technics__more');

technicsButton.addEventListener('click', function () {
    let buttonText = technicsButton.textContent;
    if (buttonText === 'Показать все') {
        technicsList.classList.add('brands__list--open');
        technicsButton.textContent = 'Скрыть';
        technicsButton.classList.add('rotate');
    } else {
        technicsList.classList.remove('brands__list--open');
        technicsButton.textContent = 'Показать все';
        technicsButton.classList.remove('rotate');
    }
});

let buttonMenu = document.querySelector('.header__button--menu');
let menu = document.querySelector('.modal-menu');

buttonMenu.addEventListener('click', function () {
    if (menu.classList.contains("menu--visible")) {
        menu.classList.remove("menu--visible")
        buttonMenu.classList.remove("button--close")
    } else {
    menu.classList.add('menu--visible')
    buttonMenu.classList.add("button--close")
    }
});


let modal = document.querySelector('.modal');
let closeButton = modal.querySelector('.button--close');
let title = modal.querySelector('.main-title');

let inputName = modal.querySelector('.form__name');
let inputMail = modal.querySelector('.form__mail');
let inputMessage = modal.querySelector('.form__message');

let buttonFeedbackChat = document.querySelectorAll('.communication__button--chat')

for (let i = 0; i < buttonFeedbackChat.length; i++) {
    buttonFeedbackChat[i].addEventListener('click', function () {
        title.innerHTML = 'Обратный звонок';
        modal.classList.add('modal--visible');
        menu.classList.remove('menu--visible');
        buttonMenu.classList.remove('button--close');
        inputMail.classList.remove('form__hide');
        inputName.classList.remove('form__hide');
        inputMessage.classList.remove('form__hide');
    });
}

closeButton.addEventListener('click', function () {
    modal.classList.remove('modal--visible');
});


let buttonFeedbackCall = document.querySelectorAll('.communication__button--call');
for (let i = 0; i < buttonFeedbackCall.length; i++) {
    buttonFeedbackCall[i].addEventListener('click', function () {

        title.innerHTML = 'Заказать звонок';
        modal.classList.add('modal--visible');
        menu.classList.remove('menu--visible');
        buttonMenu.classList.remove('button--close');
        inputMail.classList.add('form__hide');
        inputName.classList.add('form__hide');
        inputMessage.classList.add('form__hide');
    });
}

