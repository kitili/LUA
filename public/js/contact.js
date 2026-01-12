// ============================================
// CONTACT PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation and Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }
    
    if (contactForm) {
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            let firstError = null;
            
            // Validate all required inputs
            inputs.forEach(input => {
                if (input.hasAttribute('required') && input.type !== 'checkbox') {
                    if (!validateField(input)) {
                        isValid = false;
                        if (!firstError) {
                            firstError = input;
                        }
                    }
                }
            });

            // Check checkbox
            const checkbox = contactForm.querySelector('#terms');
            const checkboxGroup = checkbox ? checkbox.closest('.form-checkbox') : null;
            let checkboxError = checkboxGroup ? checkboxGroup.querySelector('.error-message') : null;
            
            if (checkbox && !checkbox.checked) {
                if (checkboxGroup) {
                    if (!checkboxError) {
                        checkboxError = document.createElement('div');
                        checkboxError.className = 'error-message';
                        checkboxGroup.appendChild(checkboxError);
                    }
                    checkboxError.textContent = 'You must agree to the terms and conditions';
                }
                if (checkbox) {
                    checkbox.classList.add('error');
                }
                isValid = false;
                if (!firstError) {
                    firstError = checkbox;
                }
            } else {
                if (checkboxError) {
                    checkboxError.remove();
                }
                if (checkbox) {
                    checkbox.classList.remove('error');
                }
            }

            if (isValid) {
                submitContactForm(this);
            } else {
                showFormMessage('Please correct the errors in the form.', 'error');
                // Scroll to first error
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    if (firstError.focus) {
                        firstError.focus();
                    }
                }
            }
        });
    }

    // Animate contact cards on scroll
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });

    // Animate form on scroll
    const contactFormSection = document.querySelector('.contact-right');
    if (contactFormSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.2 });
        
        contactFormSection.style.opacity = '0';
        contactFormSection.style.transform = 'translateX(30px)';
        contactFormSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(contactFormSection);
    }

    // Social media links (optional: add actual URLs)
    const socialLinks = document.querySelectorAll('.contact-social a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // In production, these would link to actual social media pages
            // For now, prevent default and show message
            e.preventDefault();
        });
    });
});

// Validate Individual Field
function validateField(field) {
    // Skip validation for checkboxes and buttons
    if (field.type === 'checkbox' || field.tagName === 'BUTTON') {
        return true;
    }
    
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Clear previous errors
    if (field.closest('.form-group')) {
        clearError(field);
    }

    // Required field check
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'This field is required';
        isValid = false;
    }
    // Email validation
    else if (field.type === 'email' && value) {
        if (!validateEmail(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }
    }
    // Name validation (first and last name)
    else if ((field.id === 'firstName' || field.id === 'lastName') && value) {
        if (value.length < 2) {
            errorMessage = 'Name must be at least 2 characters';
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
            errorMessage = 'Name can only contain letters and spaces';
            isValid = false;
        }
    }
    // Subject validation
    else if (field.id === 'subject' && value) {
        if (value.length < 3) {
            errorMessage = 'Subject must be at least 3 characters';
            isValid = false;
        }
    }
    // Message validation
    else if (field.id === 'message' && value) {
        if (value.length < 10) {
            errorMessage = 'Message must be at least 10 characters';
            isValid = false;
        }
    }

    if (!isValid && field.closest('.form-group')) {
        showError(field, errorMessage);
    }

    return isValid;
}

// Submit Contact Form
function submitContactForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Collect form data
    const formData = {
        firstName: form.querySelector('#firstName').value,
        lastName: form.querySelector('#lastName').value,
        email: form.querySelector('#email').value,
        subject: form.querySelector('#subject').value,
        message: form.querySelector('#message').value
    };

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success
        showFormMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // In production, you would send this data to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     showFormMessage('Thank you! Your message has been sent.', 'success');
        //     form.reset();
        // })
        // .catch(error => {
        //     showFormMessage('Sorry, there was an error. Please try again.', 'error');
        // });
        
    }, 2000);
}

// Show Form Message
function showFormMessage(message, type) {
    const form = document.querySelector('.contact-form');
    if (!form) {
        console.error('Contact form not found for message display');
        alert(message); // Fallback to alert
        return;
    }
    
    let messageDiv = form.querySelector('.form-message');
    
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        // Insert at the beginning of the form
        const firstChild = form.firstElementChild;
        if (firstChild) {
            form.insertBefore(messageDiv, firstChild);
        } else {
            form.appendChild(messageDiv);
        }
    }
    
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.display = 'block';
    messageDiv.style.opacity = '1';
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.style.display = 'none';
            messageDiv.style.opacity = '1';
        }, 300);
    }, 5000);
}

// Add CSS for form messages
const style = document.createElement('style');
style.textContent = `
    .form-message {
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        font-weight: 500;
        opacity: 1;
        transition: opacity 0.3s;
    }
    
    .form-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .form-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #dc3545;
    }
    
    .error-message {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.5rem;
        display: block;
    }
    
    .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

