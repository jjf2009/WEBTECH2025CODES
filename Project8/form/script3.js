
        const mobileInput = document.getElementById('mobile');
        const creditCardInput = document.getElementById('creditCard');
        const expiryDateInput = document.getElementById('expiryDate');
        const cvvInput = document.getElementById('cvv');
        const backBtn = document.getElementById('backBtn');
        const previewBtn = document.getElementById('previewBtn');
        const progressFill = document.getElementById('progressFill');
        const modal = document.getElementById('previewModal');
        const editBtn = document.getElementById('editBtn');
        const submitBtn = document.getElementById('submitBtn');
        const mobileError = document.getElementById('mobileError');
        const cardError = document.getElementById('cardError');
        const expiryError = document.getElementById('expiryError');
        const cvvError = document.getElementById('cvvError');
        function validateCVV(cvv) {
            const cvvPattern = /^[0-9]{3,4}$/;
            return cvvPattern.test(cvv.trim());
        }
        function validateMobile(mobile) {
            return /^[9876]\d{9}$/.test(mobile);
        }
        function validateCreditCard(card) {
            const regex = /^\d{16}$/;
            return regex.test(card.replace(/\s/g, ''));
        }
          function validateExpiryDate(expiry) {
            if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
            const [month, year] = expiry.split('/').map(Number);
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear() % 100;
            const currentMonth = currentDate.getMonth() + 1;
            
            // Validate month range
            if (month < 1 || month > 12) return false;
            
            // Card cannot be expired
            if (year < currentYear) return false;
            if (year === currentYear && month < currentMonth) return false;
            
            // Calculate max valid date (6 years from now)
            const maxDate = new Date();
            maxDate.setFullYear(maxDate.getFullYear() + 6);
            const maxYear = maxDate.getFullYear() % 100;
            const maxMonth = maxDate.getMonth() + 1;
            
            // Check if expiry is beyond 6 years
            if (year > maxYear) {
                // Handle year wrap-around (e.g., from 2024 to 2030)
                const yearDiff = year + 100 - currentYear;
                if (yearDiff <= 6) {
                    return true;
                }
                return false;
            } else if (year === maxYear) {
                // Same year as max, check month
                return month <= maxMonth;
            }  
            return true;
        }
        function capitalize(str) {
            return str.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }
        function checkValidity() {
            const mobileValid = validateMobile(mobileInput.value);
            const cardValid = validateCreditCard(creditCardInput.value.replace(/\s/g, ''));
            const expiryValid = validateExpiryDate(expiryDateInput.value);
            const cvvValid = validateCVV(cvvInput.value);   
            const isValid = mobileValid && cardValid && expiryValid && cvvValid;
            previewBtn.disabled = !isValid;
            if (isValid) {
                progressFill.style.width = '100%';
            } else {
                progressFill.style.width = '66.66%';
            }
        }
        mobileInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
            if (validateMobile(mobileInput.value)) {
                mobileInput.classList.add('valid');
                mobileInput.classList.remove('invalid');
                mobileError.classList.remove('show');
            } else {
                mobileInput.classList.remove('valid');
                if (mobileInput.value.length > 0) {
                    mobileInput.classList.add('invalid');
                    mobileError.classList.add('show');
                } else {
                    mobileInput.classList.remove('invalid');
                    mobileError.classList.remove('show');
                }
            }
            checkValidity();
        });
        mobileInput.addEventListener('blur', () => {
            if (mobileInput.value.length > 0 && !validateMobile(mobileInput.value)) {
                mobileInput.classList.add('invalid');
                mobileError.classList.add('show');
            }
        });
        creditCardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue; 
            if (validateCreditCard(value)) {
                creditCardInput.classList.add('valid');
                creditCardInput.classList.remove('invalid');
                cardError.classList.remove('show');
            } else {
                creditCardInput.classList.remove('valid');
                if (value.length > 0) {
                    creditCardInput.classList.add('invalid');
                    cardError.classList.add('show');
                } else {
                    creditCardInput.classList.remove('invalid');
                    cardError.classList.remove('show');
                }
            }
            checkValidity();
        });
        creditCardInput.addEventListener('blur', () => {
            const value = creditCardInput.value.replace(/\s/g, '');
            if (value.length > 0 && !validateCreditCard(value)) {
                creditCardInput.classList.add('invalid');
                cardError.classList.add('show');
            }
        });
        expiryDateInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value; 
            if (validateExpiryDate(expiryDateInput.value)) {
                expiryDateInput.classList.add('valid');
                expiryDateInput.classList.remove('invalid');
                expiryError.classList.remove('show');
            } else {
                expiryDateInput.classList.remove('valid');
                if (expiryDateInput.value.length === 5) {
                    expiryDateInput.classList.add('invalid');
                    expiryError.classList.add('show');
                } else {
                    expiryDateInput.classList.remove('invalid');
                    expiryError.classList.remove('show');
                }
            }
            checkValidity();
        });
        expiryDateInput.addEventListener('blur', () => {
            if (expiryDateInput.value.length > 0 && !validateExpiryDate(expiryDateInput.value)) {
                expiryDateInput.classList.add('invalid');
                expiryError.classList.add('show');
            }
        });
        cvvInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
            if (validateCVV(cvvInput.value)) {
                cvvInput.classList.add('valid');
                cvvInput.classList.remove('invalid');
                cvvError.classList.remove('show');
            } else {
                cvvInput.classList.remove('valid');
                if (cvvInput.value.length > 0) {
                    cvvInput.classList.add('invalid');
                    cvvError.classList.add('show');
                } else {
                    cvvInput.classList.remove('invalid');
                    cvvError.classList.remove('show');
                }
            }
            checkValidity();
        });
        cvvInput.addEventListener('blur', () => {
            if (cvvInput.value.length > 0 && !validateCVV(cvvInput.value)) {
                cvvInput.classList.add('invalid');
                cvvError.classList.add('show');
            }
        });
        window.addEventListener('load', () => {
            const savedDataStr = localStorage.getItem('registrationData3');
            if (savedDataStr) {
                try {
                    const savedData = JSON.parse(savedDataStr);
                    if (savedData.mobile) mobileInput.value = savedData.mobile;
                    if (savedData.creditCard) creditCardInput.value = savedData.creditCard;
                    if (savedData.expiryDate) expiryDateInput.value = savedData.expiryDate;
                    if (savedData.cvv) cvvInput.value = savedData.cvv;
                    
                    mobileInput.dispatchEvent(new Event('input'));
                    creditCardInput.dispatchEvent(new Event('input'));
                    expiryDateInput.dispatchEvent(new Event('input'));
                    cvvInput.dispatchEvent(new Event('input'));
                } catch (e) {
                    console.error('Error loading saved data:', e);
                }
            }
        });
        backBtn.addEventListener('click', () => {
            window.location.href = 'page2.html';
        });
        previewBtn.addEventListener('click', () => {
            let savedData1 = {};
            let savedData2 = {};
            try {
                savedData1 = JSON.parse(localStorage.getItem('registrationData') || '{}');
            } catch (e) {
                console.error('Error loading page 1 data:', e);
            }
            try {
                savedData2 = JSON.parse(localStorage.getItem('registrationData2') || '{}');
            } catch (e) {
                console.error('Error loading page 2 data:', e);
            }
            const savedData3 = {
                mobile: mobileInput.value,
                creditCard: creditCardInput.value,
                expiryDate: expiryDateInput.value,
                cvv: cvvInput.value
            };
            localStorage.setItem('registrationData3', JSON.stringify(savedData3)); 
            // Build complete address with location, district, and pincode
            const addressParts = [];
            if (savedData2.address) addressParts.push(savedData2.address);
            if (savedData2.userlocation) addressParts.push(savedData2.userlocation);
            if (savedData2.userdistrict) addressParts.push(savedData2.userdistrict);
            if (savedData2.pincode) addressParts.push(savedData2.pincode);
            const fullAddress = addressParts.join(', ');
            document.getElementById('previewName').textContent = capitalize(savedData1.finalname || '');
            document.getElementById('previewEmail').textContent = savedData1.email || '';
            document.getElementById('previewPassword').textContent = savedData1.password || '';
            document.getElementById('previewDOB').textContent = savedData1.dob || '';
            document.getElementById('previewAddress').textContent = fullAddress || '';
            document.getElementById('previewMobile').textContent = savedData3.mobile || '';
            document.getElementById('previewCreditCard').textContent = savedData3.creditCard || '';
            document.getElementById('previewExpiry').textContent = savedData3.expiryDate || '';
            document.getElementById('previewCVV').textContent = savedData3.cvv || '';
            modal.classList.add('active');
        });
        editBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        submitBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = 'Form Submitted Successfully!';
            document.body.appendChild(successMsg);
            setTimeout(() => {
                successMsg.remove();
                localStorage.removeItem('registrationData');
                localStorage.removeItem('registrationData2');
                localStorage.removeItem('registrationData3');
                window.location.href = 'page1.html';
            }, 3000);
        });