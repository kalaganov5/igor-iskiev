export const Send = () => {
    const forms = document.querySelectorAll('form');

    const formAddError = (input) => {
        input.classList.add('form__input--invalid');
    }

    const formRemoveError = (input) => {
        input.classList.remove('form__input--invalid');
    }

    const formValidate = (form) => {
        let error = 0;
        const inputs = form.querySelectorAll('.form__input');
        inputs.forEach((input) => {

            input.addEventListener('input', () => {
                formRemoveError(input);
            })

            if (input.name === "accept" && input.checked === false) {
                error++;
                formAddError(input);
            } else if (input.name === "tel" && +input.value.replace(/[^0-9]/g, "").length < 11) {
                // длина телефона от 10 цифр
                error++;
                formAddError(input);
            }

        });
        return error;
    }

    forms.forEach((form) => {
        const formSend = async (evt) => {
            evt.preventDefault();

            let error = formValidate(form);
            console.log(error)
            if (error) {
                // form.reset();
                console.error('error')
            } else {
                console.info('success')
                form.reset();
            }

        }
        form.addEventListener('submit', formSend)
    });
}