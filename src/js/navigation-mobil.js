export const navigationMobile = (bodyClass) => {
    const bodyContainer = document.querySelector(`.${bodyClass}`);
    const hamburger = bodyContainer.querySelector('.hamburger');

    console.log(bodyContainer)
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        bodyContainer.classList.toggle(`body--navigation-show`);
    });
    console.log(hamburger)
}