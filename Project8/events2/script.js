
        function logEvent(section, eventType, details = '') {
            const logsDiv = document.getElementById(`${section}-logs`);
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';
            logEntry.innerHTML = `
                <div class="timestamp">[${timestamp}]</div>
                <div><strong>${eventType}</strong> ${details}</div>
            `;
            logsDiv.insertBefore(logEntry, logsDiv.firstChild);
            
            if (logsDiv.children.length > 50) {
                logsDiv.removeChild(logsDiv.lastChild);
            }
        }
        function clearLogs(section) {
            document.getElementById(`${section}-logs`).innerHTML = '';
        }
        // PAGE LOAD EVENT
        window.addEventListener('load', () => {
            logEvent('input', 'LOAD', 'Page fully loaded');
        });
        // FORM EVENTS
        const demoForm = document.getElementById('demo-form');
        const textInput = document.getElementById('text-input');
        const emailInput = document.getElementById('email-input');
        const selectInput = document.getElementById('select-input');
        const checkboxInput = document.getElementById('checkbox-input');
        const radioInputs = document.querySelectorAll('input[name="radio"]');
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(demoForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            logEvent('input', 'SUBMIT', `Form submitted: ${JSON.stringify(data)}`);
        });
        demoForm.addEventListener('reset', () => {
            logEvent('input', 'RESET', 'Form reset');
        });
        // INPUT EVENTS
        textInput.addEventListener('input', (e) => {
            logEvent('input', 'INPUT', `Value: "${e.target.value}"`);
        });
        textInput.addEventListener('focus', () => {
            logEvent('input', 'FOCUS', 'Text input focused');
        });
        textInput.addEventListener('blur', () => {
            logEvent('input', 'BLUR', 'Text input blurred');
        });
        emailInput.addEventListener('select', (e) => {
            logEvent('input', 'SELECT', 'Text selected in email input');
        });
        emailInput.addEventListener('change', (e) => {
            logEvent('input', 'CHANGE', `Email: "${e.target.value}"`);
        });
        selectInput.addEventListener('change', (e) => {
            logEvent('input', 'CHANGE', `Selected: "${e.target.value}"`);
        });
        checkboxInput.addEventListener('change', (e) => {
            logEvent('input', 'CHANGE', `Checkbox ${e.target.checked ? 'checked' : 'unchecked'}`);
        });
        radioInputs.forEach(radio => {
            radio.addEventListener('change', (e) => {
                logEvent('input', 'CHANGE', `Radio: "${e.target.value}"`);
            });
        });
        // MOUSE EVENTS
        const mouseArea = document.getElementById('mouse-area');
        const hoverBtn = document.getElementById('hover-btn');
        mouseArea.addEventListener('click', (e) => {
            logEvent('mouse', 'CLICK', `at (${e.clientX}, ${e.clientY})`);
        });
        mouseArea.addEventListener('dblclick', (e) => {
            logEvent('mouse', 'DOUBLE CLICK', `at (${e.clientX}, ${e.clientY})`);
        });
        mouseArea.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            logEvent('mouse', 'RIGHT CLICK', `at (${e.clientX}, ${e.clientY})`);
        });
        mouseArea.addEventListener('mouseenter', () => {
            logEvent('mouse', 'MOUSE ENTER', 'Entered area');
        });
        mouseArea.addEventListener('mouseleave', () => {
            logEvent('mouse', 'MOUSE LEAVE', 'Left area');
        });
        let moveCount = 0;
        mouseArea.addEventListener('mousemove', (e) => {
            moveCount++;
            if (moveCount % 10 === 0) {
                logEvent('mouse', 'MOUSE MOVE', `(${e.clientX}, ${e.clientY})`);
            }
        });
        mouseArea.addEventListener('mousedown', (e) => {
            logEvent('mouse', 'MOUSE DOWN', `Button: ${e.button}`);
        });
        mouseArea.addEventListener('mouseup', (e) => {
            logEvent('mouse', 'MOUSE UP', `Button: ${e.button}`);
        });
        hoverBtn.addEventListener('mouseenter', () => {
            logEvent('mouse', 'HOVER', 'Button hovered');
        });
        hoverBtn.addEventListener('mouseleave', () => {
            logEvent('mouse', 'HOVER END', 'Hover ended');
        });
        // KEYBOARD EVENTS
        const keyboardInput = document.getElementById('keyboard-input');
        keyboardInput.addEventListener('keydown', (e) => {
            logEvent('keyboard', 'KEY DOWN', `Key: "${e.key}" Code: "${e.code}"`);
        });
        keyboardInput.addEventListener('keyup', (e) => {
            logEvent('keyboard', 'KEY UP', `Key: "${e.key}" Code: "${e.code}"`);
        });
        keyboardInput.addEventListener('keypress', (e) => {
            logEvent('keyboard', 'KEY PRESS', `Char: "${e.key}"`);
        });
        // Smooth scrolling
        document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        });