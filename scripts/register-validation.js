const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validateForm() {
    let valid = true;
    
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    const nameError = document.querySelector('#nameError');
    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');
    
    // Limpiar mensajes de error
    nameError.style.visibility = 'hidden';
    emailError.style.visibility = 'hidden';
    passwordError.style.visibility = 'hidden';
    
    // Validar nombre
    if (nameInput.value.trim() === "") {
        nameError.style.visibility = 'visible';
        nameInput.classList.add('input-error');
        valid = false;
    } else {
        nameInput.classList.remove('input-error');
    }
    
    // Validar email
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.visibility = 'visible';
        emailInput.classList.add('input-error');
        valid = false;
    } else {
        emailInput.classList.remove('input-error');
    }
    
    // Validar contraseña
    if (passwordInput.value.length < 6) {
        passwordError.style.visibility = 'visible';
        passwordInput.classList.add('input-error');
        valid = false;
    } else {
        passwordInput.classList.remove('input-error');
    }
    
    return valid;
}
