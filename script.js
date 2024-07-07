const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const numberInput = document.getElementById('number');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const usernameError = document.querySelector('.form-group:nth-child(1) .error-message');
const firstnameError = document.querySelector('.form-group:nth-child(2) .error-message');
const lastnameError = document.querySelector('.form-group:nth-child(3) .error-message');
const emailError = document.querySelector('.form-group:nth-child(4) .error-message');
const numberError = document.querySelector('.form-group:nth-child(5) .error-message');
const passwordError = document.querySelector('.form-group:nth-child(6) .error-message');
const confirmPasswordError = document.querySelector('.form-group:nth-child(7) .error-message');


function validateForm() {
  let isValid = true;

  // Username validation (check for emptiness)
  if (usernameInput.value === '') {
    usernameError.textContent = 'Username cannot be empty';
    isValid = false;
  } else {
    const usernameRegex = /^[a-z0-9_]+$/; // This regex matches lowercase letters, numbers, and underscores
    if (!usernameRegex.test(usernameInput.value)) {
      usernameError.textContent = 'Username can only contain lowercase letters, numbers, and underscores';
      isValid = false;
    } else {
      usernameError.textContent = '';
    }
  }

  if (firstnameInput.value === '') {
    firstnameError.textContent = 'Firstname cannot be empty';
    isValid = false;
  } else {
    const usernameRegex = /^[A-Za-z]+$/; // This regex matches uppercase and lowercase letters
    if (!usernameRegex.test(firstnameInput.value)) {
      firstnameError.textContent = 'Firstname can only contain letters (uppercase and lowercase)';
      isValid = false;
    } else {
      firstnameError.textContent = '';
    }
  }

  if (lastnameInput.value === '') {
    lastnameError.textContent = 'Lastname cannot be empty';
    isValid = false;
  } else {
    const usernameRegex = /^[A-Za-z]+$/; // This regex matches uppercase and lowercase letters
    if (!usernameRegex.test(lastnameInput.value)) {
      lastnameError.textContent = 'Lastname can only contain letters (uppercase and lowercase)';
      isValid = false;
    } else {
      lastnameError.textContent = '';
    }
  }

  // Email validation (check for valid email format)
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  const mobileNumber = numberInput.value;
  if (mobileNumber === '') {
    numberError.textContent = 'Mobile number cannot be empty';
    isValid = false;
  } else {
    const mobileRegex = /^\d{10,13}$/; // Matches 10 to 13 digits
    if (!mobileRegex.test(mobileNumber)) {
      numberError.textContent = 'Mobile number must be between 10 and 13 digits';
      isValid = false;
    } else {
      numberError.textContent = '';
    }
  }

  // Password validation (check for minimum length and emptiness)
  if (passwordInput.value === '' || passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  // Confirm password validation (check if it matches the password)
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    isValid = false;
  } else {
    confirmPasswordError.textContent = '';
  }

  return isValid;
}
