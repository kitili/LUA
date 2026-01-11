// ============================================
// QUOTE PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Quote Form
    const quoteForm = document.getElementById('quote-form');
    
    if (!quoteForm) {
        console.error('Quote form not found!');
        return;
    }
    
    if (quoteForm) {
        // Real-time validation
        const inputs = quoteForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateQuoteField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateQuoteField(this);
                }
            });
        });

        // Form submission
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            let firstError = null;
            
            // Validate all required inputs
            inputs.forEach(input => {
                if (input.hasAttribute('required')) {
                    if (!validateQuoteField(input)) {
                        isValid = false;
                        if (!firstError) {
                            firstError = input;
                        }
                    }
                }
            });

            // Check privacy checkbox
            const privacyCheckbox = quoteForm.querySelector('#privacy');
            if (privacyCheckbox) {
                const checkboxGroup = privacyCheckbox.closest('.form-checkbox');
                let checkboxError = checkboxGroup ? checkboxGroup.querySelector('.error-message') : null;
                
                if (!privacyCheckbox.checked) {
                    if (checkboxGroup) {
                        if (!checkboxError) {
                            checkboxError = document.createElement('div');
                            checkboxError.className = 'error-message';
                            checkboxGroup.appendChild(checkboxError);
                        }
                        checkboxError.textContent = 'You must agree to the Privacy Policy';
                    }
                    if (privacyCheckbox) {
                        privacyCheckbox.classList.add('error');
                    }
                    isValid = false;
                    if (!firstError) {
                        firstError = privacyCheckbox;
                    }
                } else {
                    if (checkboxError) {
                        checkboxError.remove();
                    }
                    if (privacyCheckbox) {
                        privacyCheckbox.classList.remove('error');
                    }
                }
            }

            if (isValid) {
                submitQuoteForm(this);
            } else {
                showQuoteMessage('Please correct the errors in the form.', 'error');
                // Scroll to first error
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });
    }

    // Animate Why Choose Feature Cards
    const whyFeatureCards = document.querySelectorAll('.why-feature-card');
    whyFeatureCards.forEach((card, index) => {
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

    // Inquire Links Functionality
    const whatsappLink = document.querySelector('.inquire-link.whatsapp');
    const emailLink = document.querySelector('.inquire-link.email');
    
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function(e) {
            e.preventDefault();
            // In production, this would open WhatsApp with pre-filled message
            window.open('https://wa.me/254701123456?text=Hello, I am interested in your solar solutions.', '_blank');
        });
    }
    
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'contact.html';
        });
    }

    // Smooth scroll to form when "Get Started" is clicked
    const getStartedBtn = document.querySelector('.hero-btn-primary');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const form = document.getElementById('quote-form');
            if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});

// Validate Quote Form Field
function validateQuoteField(field) {
    // Skip validation for checkboxes and non-input elements
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
    // Phone validation
    else if (field.type === 'tel' && value) {
        if (!validatePhone(value)) {
            errorMessage = 'Please enter a valid phone number';
            isValid = false;
        }
    }
    // Name validation
    else if ((field.id === 'firstName' || field.id === 'lastName') && value) {
        if (value.length < 2) {
            errorMessage = 'Name must be at least 2 characters';
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
            errorMessage = 'Name can only contain letters and spaces';
            isValid = false;
        }
    }
    // Address validation
    else if (field.id === 'address' && value) {
        if (value.length < 3) {
            errorMessage = 'Please enter a complete address';
            isValid = false;
        }
    }
    // Project location validation
    else if (field.id === 'location' && value) {
        if (value.length < 2) {
            errorMessage = 'Please enter a valid location';
            isValid = false;
        }
    }
    // Select validation
    else if (field.tagName === 'SELECT' && field.hasAttribute('required') && !value) {
        errorMessage = 'Please select an option';
        isValid = false;
    }

    if (!isValid && field.closest('.form-group')) {
        showError(field, errorMessage);
    }

    return isValid;
}

// Submit Quote Form
function submitQuoteForm(form) {
    const submitBtn = form.querySelector('.quote-submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    // Collect form data
    const formData = {
        firstName: form.querySelector('#firstName').value,
        lastName: form.querySelector('#lastName').value,
        email: form.querySelector('#email').value,
        phone: form.querySelector('#phone').value,
        address: form.querySelector('#address').value,
        projectType: form.querySelector('#projectType').value,
        location: form.querySelector('#location').value,
        city: form.querySelector('#city').value,
        description: form.querySelector('#description').value
    };

    // Simulate form submission
    setTimeout(() => {
        // Success
        showQuoteMessage('Thank you! Your quote request has been submitted successfully. We will contact you within 24 hours.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Scroll to success message
        const messageDiv = form.querySelector('.quote-message');
        if (messageDiv) {
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        // In production, send to backend:
        // fetch('/api/quote', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     showQuoteMessage('Thank you! Your quote request has been submitted.', 'success');
        //     form.reset();
        // })
        // .catch(error => {
        //     showQuoteMessage('Sorry, there was an error. Please try again.', 'error');
        // });
        
    }, 2000);
}

// Show Quote Message
function showQuoteMessage(message, type) {
    const form = document.getElementById('quote-form');
    if (!form) {
        console.error('Form not found for message display');
        alert(message); // Fallback to alert
        return;
    }
    
    let messageDiv = form.querySelector('.quote-message');
    
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'quote-message';
        // Insert at the beginning of the form
        const firstChild = form.firstElementChild;
        if (firstChild) {
            form.insertBefore(messageDiv, firstChild);
        } else {
            form.appendChild(messageDiv);
        }
    }
    
    messageDiv.textContent = message;
    messageDiv.className = `quote-message ${type}`;
    messageDiv.style.display = 'block';
    messageDiv.style.opacity = '1';
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.style.display = 'none';
            messageDiv.style.opacity = '1';
        }, 300);
    }, 6000);
}

// Add CSS for quote form messages
const style = document.createElement('style');
style.textContent = `
    .quote-message {
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        font-weight: 500;
        opacity: 1;
        transition: opacity 0.3s;
    }
    
    .quote-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .quote-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    .quote-form input.error,
    .quote-form select.error,
    .quote-form textarea.error {
        border-color: #dc3545;
    }
    
    .quote-submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

