
        const nameInput = document.getElementById('name');
        const lastNameInput = document.getElementById('lastName');
        const birthDateInput = document.getElementById('birthDate');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const nextBtn = document.getElementById('nextBtn');
        const progressFill = document.getElementById('progressFill');
        const nameError = document.getElementById('nameError');
        const lastNameError = document.getElementById('lastNameError');
        const birthDateError = document.getElementById('birthDateError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        // Validation functions
        function validateName(name) {
            const regex = /^[A-Za-z]{2,}$/;
            return regex.test(name.trim());
        }
         function validateAge(birthDate) {
            if (!birthDate) return false;
            
            const today = new Date();
            const birth = new Date(birthDate);
            let age = today.getFullYear() - birth.getFullYear();
            const monthDiff = today.getMonth() - birth.getMonth();
            
            // Calculate exact age
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age--;
            }
            
            // Must be at least 18
            if (age < 18) return false;
            
            // Must not be more than 60 (checking exact date)
            if (age > 60) return false;
            
            // If exactly 60, check if birthday has passed this year
            // if (age === 60) {
            //     if (monthDiff > 0 || (monthDiff === 0 && today.getDate() >= birth.getDate())) {
            //         return false; // Already turned 60, so too old
            //     }
            // }
            
            return true;
        }
        function validateEmail(email) {
            if (!email || typeof email !== 'string') {
                return false;
            }   
            const parts = email.split('@');
            if (parts.length !== 2) {
                return false;
            }
            const [local, domain] = parts;
            if (!local || local.length === 0) {
                return false;
            }
            const localRegex = /^[A-Za-z0-9!#$%^&*_+=?`{|}~-]+(\.[A-Za-z0-9!#$%^&*_+=?`{|}~-]+)*$/;
            if (!localRegex.test(local)) {
                return false;
            }
            if (!domain || domain.length === 0) {
                return false;
            }
            const domainRegex = /^[A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;
            if (!domainRegex.test(domain)) {
                return false;
            }
            return true;
        }
        function validatePassword(password) {
            if (password.length < 8) return false;   
            const lowercaseCount = (password.match(/[a-z]/g) || []).length;
            const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
            const specialCount = (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
            return lowercaseCount >= 2 && uppercaseCount >= 2 && specialCount >= 2;
        }
        function formatDateToDayMonthYear(dateString) {
            const date = new Date(dateString);
            const day = date.getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const month = monthNames[date.getMonth()];
            const year = date.getFullYear();   
            return `${day}/${month}/${year}`;
        }
        function checkValidity() {
            const nameValid = validateName(nameInput.value);
            const lastNameValid = validateName(lastNameInput.value);
            const birthDateValid = validateAge(birthDateInput.value);
            const emailValid = validateEmail(emailInput.value);
            const passwordValid = validatePassword(passwordInput.value);   
            const isValid = nameValid && lastNameValid && birthDateValid && emailValid && passwordValid;
            nextBtn.disabled = !isValid;
            if (isValid) {
                progressFill.style.width = '33.33%';
            } else {
                progressFill.style.width = '0%';
            }
        }
        nameInput.addEventListener('input', () => {
            const isValid = validateName(nameInput.value);
            if (nameInput.value.length > 0) {
                nameInput.classList.toggle('valid', isValid);
                nameInput.classList.toggle('invalid', !isValid);
                nameError.classList.toggle('show', !isValid);
            } else {
                nameInput.classList.remove('valid', 'invalid');
                nameError.classList.remove('show');
            }
            checkValidity();
        });
        lastNameInput.addEventListener('input', () => {
            const isValid = validateName(lastNameInput.value);
            if (lastNameInput.value.length > 0) {
                lastNameInput.classList.toggle('valid', isValid);
                lastNameInput.classList.toggle('invalid', !isValid);
                lastNameError.classList.toggle('show', !isValid);
            } else {
                lastNameInput.classList.remove('valid', 'invalid');
                lastNameError.classList.remove('show');
            }
            checkValidity();
        });
        birthDateInput.addEventListener('input', () => {
            const isValid = validateAge(birthDateInput.value);
            if (birthDateInput.value) {
                birthDateInput.classList.toggle('valid', isValid);
                birthDateInput.classList.toggle('invalid', !isValid);
                birthDateError.classList.toggle('show', !isValid);
            } else {
                birthDateInput.classList.remove('valid', 'invalid');
                birthDateError.classList.remove('show');
            }
            checkValidity();
        });
        emailInput.addEventListener('input', () => {
            const isValid = validateEmail(emailInput.value);
            if (emailInput.value.length > 0) {
                emailInput.classList.toggle('valid', isValid);
                emailInput.classList.toggle('invalid', !isValid);
                emailError.classList.toggle('show', !isValid);
            } else {
                emailInput.classList.remove('valid', 'invalid');
                emailError.classList.remove('show');
            }
            checkValidity();
        });
        passwordInput.addEventListener('input', () => {
            const isValid = validatePassword(passwordInput.value);
            if (passwordInput.value.length > 0) {
                passwordInput.classList.toggle('valid', isValid);
                passwordInput.classList.toggle('invalid', !isValid);
                passwordError.classList.toggle('show', !isValid);
            } else {
                passwordInput.classList.remove('valid', 'invalid');
                passwordError.classList.remove('show');
            }
            checkValidity();
        });
        // Load saved data if any
        window.addEventListener('load', () => {
            const savedDataStr = localStorage.getItem('registrationData');
            if (savedDataStr) {
                try {
                    const savedData = JSON.parse(savedDataStr);
                    if (savedData.name) nameInput.value = savedData.name;
                    if (savedData.lastName) lastNameInput.value = savedData.lastName;
                    if (savedData.email) emailInput.value = savedData.email;
                    if (savedData.password) passwordInput.value = savedData.password;
                    if (savedData.dobOriginal) birthDateInput.value = savedData.dobOriginal;    
                    // Trigger validation
                    nameInput.dispatchEvent(new Event('input'));
                    lastNameInput.dispatchEvent(new Event('input'));
                    emailInput.dispatchEvent(new Event('input'));
                    passwordInput.dispatchEvent(new Event('input'));
                    birthDateInput.dispatchEvent(new Event('input'));
                } catch (e) {
                    console.error('Error loading saved data:', e);
                }
            }
        });
        nextBtn.addEventListener('click', () => {
            const data = {
                name: nameInput.value,
                finalname: nameInput.value.toUpperCase() + " " + lastNameInput.value.toUpperCase(),
                lastName: lastNameInput.value,
                dobOriginal: birthDateInput.value,
                dob: formatDateToDayMonthYear(birthDateInput.value),
                email: emailInput.value,
                password: passwordInput.value
            };
            localStorage.setItem('registrationData', JSON.stringify(data));
            window.location.href = 'page2.html';
        });