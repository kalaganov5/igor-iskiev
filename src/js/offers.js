import Dialog from './dialog';
import { data } from './data';

const buttons = document.querySelectorAll('.offers__link');
const modalTemplate = document.querySelector('#modal-offer').content;

export const offersHandler = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            const offersData = data[0].offers;

            const offerName = evt.target.dataset.id;
            console.log(offersData['eating']);
            const modalOffer = new Dialog(offersData[offerName], modalTemplate);
            modalOffer.init();
        });
    });

}