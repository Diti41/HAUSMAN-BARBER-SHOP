
// Sign in sign up form validation
document.addEventListener('DOMContentLoaded', () => {
    const createAccountLink = document.getElementById('createAccountLink');
    const signUpForm = document.getElementById('signUpForm');
    const closeSignUp = document.getElementById('closeSignUp');

    createAccountLink.addEventListener('click', (event) => {
        event.preventDefault();
        signUpForm.style.display = 'flex';
    });

    closeSignUp.addEventListener('click', () => {
        signUpForm.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === signUpForm) {
            signUpForm.style.display = 'none';
        }
    });
});
 // Confirm password /Password validation//
const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const errorMessage = document.getElementById('error-message');
        const successMessage = document.getElementById('success-message');

        confirmPassword.addEventListener('input', validatePasswords);
        password.addEventListener('input', validatePasswords);

        function validatePasswords() {
            if (password.value !== confirmPassword.value) {
                errorMessage.textContent = "Passwords do not match.";
                successMessage.textContent = "";
                return false;
            } else {
                errorMessage.textContent = "";
                successMessage.textContent = "Passwords match.";
                return true;
            }
        }