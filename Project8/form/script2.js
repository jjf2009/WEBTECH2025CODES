
        const addressInput = document.getElementById('address');
        const pincodeSuffix = document.getElementById('pincodeSuffix');
        const userlocation = document.getElementById('userlocation');
        const userdistrict = document.getElementById('userdistrict');
        const backBtn = document.getElementById('backBtn');
        const nextBtn = document.getElementById('nextBtn');
        const progressFill = document.getElementById('progressFill');
        const addressError = document.getElementById('addressError');
        const pincodeError = document.getElementById('pincodeError');
        const pincodeLocations = {
            "801": ["A.P.dabolim", "South Goa"],
            "401": ["Farmagudi", "North Goa"],
            "702": ["Sadolxem", "South Goa"],
            "705": ["Ambaulim", "South Goa"],
            "723": ["Ambelim", "South Goa"],
            "107": ["Amona", "North Goa"],
            "601": ["Margao", "South Goa"],
            "714": ["Assolda", "South Goa"],
            "701": ["Assolna", "South Goa"],
            "802": ["Baina", "South Goa"],
            "703": ["Balli", "South Goa"],
            "704": ["Bati", "South Goa"],
            "716": ["Benaulim", "South Goa"],
            "713": ["Betalbhatim", "South Goa"],
            "409": ["Betora I.e.", "North Goa"],
            "806": ["Bogmalo", "South Goa"],
            "706": ["Cacora", "South Goa"],
            "718": ["Camurlim", "North Goa"],
            "712": ["Cansaulim", "South Goa"],
            "717": ["Carmona", "South Goa"],
            "731": ["Cavelossim", "South Goa"],
            "115": ["Cundaim I.e.", "North Goa"],
            "410": ["Collem", "South Goa"],
            "708": ["Colva", "South Goa"],
            "710": ["Cortalim", "South Goa"],
            "709": ["Curtorim", "South Goa"],
            "707": ["Davorlim", "South Goa"],
            "725": ["Dramapur", "South Goa"],
            "602": ["Fatorda", "South Goa"],
            "728": ["Loliem", "South Goa"],
            "404": ["Mardol", "North Goa"],
            "803": ["Mormugao", "South Goa"],
            "722": ["Nagao", "North Goa"],
            "729": ["Navelim Camp", "South Goa"],
            "604": ["Nuvem", "South Goa"],
            "724": ["Orlim", "South Goa"],
            "720": ["Raia", "South Goa"],
            "804": ["Sada", "South Goa"],
            "719": ["Sem-rachol soso", "South Goa"],
            "406": ["Tisca", "North Goa"],
            "105": ["Velguem", "North Goa"],
            "721": ["Varca", "South Goa"],
            "726": ["Zuarinagar", "South Goa"]
        };
        function capitalize(str) {
            return str.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }
        function validateAddress(address) {
            const words = address.trim().split(/\s+/);
            return words.length > 1 && words.every(word => word.length > 0);
        }
        function updateLocationOptions() {
            const suffix = pincodeSuffix.value;
            if (suffix.length === 3 && pincodeLocations[suffix]) {
                userlocation.value = pincodeLocations[suffix][0];
                userlocation.classList.add('valid');
                userdistrict.value = pincodeLocations[suffix][1];
                userdistrict.classList.add('valid');
                pincodeSuffix.classList.add('valid');
                pincodeSuffix.classList.remove('invalid');
                pincodeError.classList.remove('show');
            } else {
                userlocation.value = "";
                userlocation.classList.remove('valid');
                userdistrict.value = "";
                userdistrict.classList.remove('valid');
                if (suffix.length > 0) {
                    pincodeSuffix.classList.add('invalid');
                    pincodeSuffix.classList.remove('valid');
                    pincodeError.classList.add('show');
                } else {
                    pincodeSuffix.classList.remove('invalid', 'valid');
                    pincodeError.classList.remove('show');
                }
            }
            checkValidity();
        }
        function checkValidity() {
            const isValid = validateAddress(addressInput.value) && pincodeSuffix.value.length === 3 && userlocation.value !== '' && userdistrict.value !== '';
            nextBtn.disabled = !isValid;   
            if (isValid) {
                progressFill.style.width = '66.66%';
            } else {
                progressFill.style.width = '33.33%';
            }
        }
        addressInput.addEventListener('input', (e) => {
            e.target.value = capitalize(e.target.value);
            const isValid = validateAddress(addressInput.value);   
            if (addressInput.value.length > 0) {
                addressInput.classList.toggle('valid', isValid);
                addressInput.classList.toggle('invalid', !isValid);
                addressError.classList.toggle('show', !isValid);
            } else {
                addressInput.classList.remove('valid', 'invalid');
                addressError.classList.remove('show');
            }
            checkValidity();
        });
        pincodeSuffix.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
            updateLocationOptions();
        });
        // Load saved data
        window.addEventListener('load', () => {
            const savedDataStr = localStorage.getItem('registrationData2');
            if (savedDataStr) {
                try {
                    const savedData = JSON.parse(savedDataStr);
                    if (savedData.address) addressInput.value = savedData.address;
                    if (savedData.pincodeSuffix) {
                        pincodeSuffix.value = savedData.pincodeSuffix;
                        updateLocationOptions();
                    }
                    if (savedData.userlocation) userlocation.value = savedData.userlocation;
                    if (savedData.userdistrict) userdistrict.value = savedData.userdistrict;
                    addressInput.dispatchEvent(new Event('input'));
                    pincodeSuffix.dispatchEvent(new Event('input'));
                    userlocation.dispatchEvent(new Event('change'));
                    userdistrict.dispatchEvent(new Event('change'));
                } catch (e) {
                    console.error('Error loading saved data:', e);
                }
            }
        });
        backBtn.addEventListener('click', () => {
            window.location.href = 'page1.html';
        });
        nextBtn.addEventListener('click', () => {
            const savedDataStr = localStorage.getItem('registrationData2');
            let savedData = {};
            if (savedDataStr) {
                try {
                    savedData = JSON.parse(savedDataStr);
                } catch (e) {
                    console.error('Error parsing saved data:', e);
                }
            }
            savedData.address = addressInput.value;
            savedData.pincodeSuffix = pincodeSuffix.value;
            savedData.pincode = '403' + pincodeSuffix.value;
            savedData.userlocation = userlocation.value;
            savedData.userdistrict = userdistrict.value;
            localStorage.setItem('registrationData2', JSON.stringify(savedData));
            window.location.href = 'page3.html';
        });
    