const generateModal = (htmlTemplate, data) => {
    console.log('clone')
    const html = htmlTemplate.querySelector('.dialog').cloneNode(true);
    // fill modal
    const textHTML = html.querySelector('.modal-offer__content');
    textHTML.innerHTML = data;

    return html;
}

export default class Dialog {
    #templateHTML = null;
    #body = null;
    #data = null;
    #classDialogOpen = 'dialog--open';
    #html = null;
    /**
     * @param {*} data информация
     * @param {*} template html template
     */
    constructor(data, template) {
        this.#data = data;
        this.#templateHTML = template;
    }

    init() {
        console.log('init');
        this.#body = document.querySelector('body');
        this.open();
        this.#closeHandler();
        this.#escCloseHandler();
    }

    open() {
        this.#html = this.#generateModal();
        this.#body.classList.add(this.#classDialogOpen);
        this.#body.appendChild(this.#html);
    }

    close() {
        this.#body.classList.remove(this.#classDialogOpen);
        this.#html.remove();
    }

    #generateModal() {
        this.#html = generateModal(this.#templateHTML, this.#data);
        return generateModal(this.#templateHTML, this.#data);
    }

    #closeHandler() {
        const closeButton = this.#html.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            this.close();
        });
    }

    #escCloseHandler() {
        document.addEventListener('keydown', (evt) => {
            if (evt.key === "Escape" || evt.key === "Esc") {
                this.close();
            }
        });
    }
}