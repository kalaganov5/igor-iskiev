import '../scss/app.scss';

/* Your JS Code goes here */

import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { navigationMobile } from '../js/navigation-mobil';
import { offersHandler } from '../js/offers';
import { tabsHandler } from '../js/tabs';
import { Send } from '../js/send';
import { phoneValidation } from '../js/phone-validation';

navigationMobile('body');
tabsHandler();

var swiper = new Swiper(".reviews__slider", {
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 35
        }
    },
    autoHeight: true
});

offersHandler();

Send();

phoneValidation();