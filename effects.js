document.addEventListener('DOMContentLoaded', function() {
    // Password toggle
    const togglePassword = document.querySelector('.toggle-password');
    const password = document.getElementById('password');
    
    if (togglePassword && password) {
        togglePassword.addEventListener('click', function() {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('active');
        });
    }
    
    // Input focus effect    s
    const inputs = document.querySelectorAll('.input-with-icon input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('i').style.color = '#667eea';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('i').style.color = '#7f8c8d';
        });
    });
    
    // Button hover effect
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 7px 20px rgba(102, 126, 234, 0.5)';
        });
        
        loginBtn.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
        });
    }
    
    // Social icons hover
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Form submission effect
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading effect
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Login Successful';
                    setTimeout(() => {
                        submitBtn.innerHTML = 'Login';
                        submitBtn.disabled = false;
                    }, 1500);
                }, 2000);
            }
        });
    }
});