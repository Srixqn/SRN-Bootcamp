// Form validation logic
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            let isValid = true;
            
            // Reset error states
            document.querySelectorAll('.error').forEach(el => el.remove());
            document.querySelectorAll('.input-with-icon input').forEach(input => {
                input.style.borderColor = '#ecf0f1';
            });
            
            // Email validation
            if (!email.value) {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            }
            
            // Password validation
            if (!password.value) {
                showError(password, 'Password is required');
                isValid = false;
            } else if (password.value.length < 6) {
                showError(password, 'Password must be at least 6 characters');
                isValid = false;
            }
            
            if (isValid) {
                // Proceed with form submission
                console.log('Form is valid, submitting...');
                // In a real app, you would call your authentication API here
            }
        });
    }
    
    function showError(input, message) {
        input.style.borderColor = '#e74c3c';
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        input.parentElement.parentElement.appendChild(errorElement);
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});