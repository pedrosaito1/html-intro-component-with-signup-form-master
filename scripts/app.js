const app = () => {
    const form = document.querySelector('#form');
    const firstName = document.querySelector('.firstName');
    const lastName = document.querySelector('.lastName');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');

    //Assign error to input
    function setError(input, msgError) {
        const form = input.parentElement;
        const span = form.querySelector('span');

        form.classList.add('error');
        span.innerText = msgError;
    }

    //Assign success to input
    function setSuccess(input) {
        const form = input.parentElement;
        form.classList.add('success');
        form.classList.remove('error');
    }

    //Check all inputs
    function checkInput() {
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const emailValue = email.value;
        const passwordValue = password.value;

        if(firstNameValue === '') {
            setError(firstName, "First Name cannot be empty");
        } else {
            setSuccess(firstName);
        }

        if(lastNameValue === '') {
            setError(lastName, "First Name cannot be empty");
        } else {
            setSuccess(lastName);
        }

        if(emailValue === '') {
            setError(email, "Email cannot be empty");
        } else if (!checkEmail(emailValue)) {
            setError(email, "Looks like this is not an email");
        } else {
            setSuccess(email);
        }

        if(passwordValue === '') {
            setError(password, "Password cannot be empty");
        } else if(passwordValue.length < 6) {
            setError(password, "Password must be 6 digits or more");
        } else {
            setSuccess(password);
        }

        isFormValid();
    }

    //Check if the email is valid
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    //Checks if all inputs passed
    function isFormValid() {
        const formBoxes = document.querySelectorAll('.form-box');
        const formValid = [...formBoxes].every((formBox) => {
            return formBox.className === 'form-box success';
        });

         if (formValid) reloadPage();
    };

    //Reload the page
    function reloadPage() {
        setTimeout(() => {
            location.reload()

            firstName.value = '';
            lastName.value = '';
            email.value = '';
            password.value = '';
        }, 5000);
    }

    //Add event submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInput();
    });
}
app();
