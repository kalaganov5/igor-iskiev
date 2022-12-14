export const tabsHandler = () => {
    const tabButtons = document.querySelectorAll('.spoiler__button');
    tabButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            tabButton.parentNode.parentElement.classList.toggle('spoiler__item--active');
        });
    });
}