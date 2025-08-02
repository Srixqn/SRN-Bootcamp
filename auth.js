// Authentication logic
document.addEventListener('DOMContentLoaded', function() {
    // Simulated user database
    const users = [
        { email: 'user@example.com', password: 'password123' },
        { email: 'test@test.com', password: 'test123' }
    ];
    
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.querySelector('.remember-me input').checked;
            
            // Find user in our simulated database
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Successful login
                alert('Login successful! Redirecting to dashboard...');
                
                // Store login state if "Remember me" is checked
                if (rememberMe) {
                    localStorage.setItem('rememberedEmail', email);
                }
                
                // Redirect to dashboard (in a real app)
                // window.location.href = '/dashboard';
            } else {
                // Failed login
                alert('Invalid email or password. Please try again.');
            }
        });
    }
    
    // Check for remembered email on page load
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        document.querySelector('.remember-me input').checked = true;
    }
    
    // Forgot password functionality
    const forgotPassword = document.querySelector('.forgot-password');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt('Please enter your email to reset your password:');
            
            if (email) {
                // In a real app, you would send a reset password email
                alert(`Password reset link has been sent to ${email}`);
            }
        });
    }
    
    // Social login handlers
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.classList.contains('google') ? 'Google' : 
                           this.classList.contains('facebook') ? 'Facebook' : 'Twitter';
                           
            alert(`In a real app, this would redirect to ${provider} authentication`);
        });
    });
    
    // Sign up button in the right panel
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            alert('Redirecting to sign up page...');
            // In a real app: window.location.href = '/signup';
        });
    }
    
    // Sign up link in the form
    const signupLink = document.querySelector('.signup-link a');
    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to sign up page...');
            // In a real app: window.location.href = '/signup';
        });
    }
});