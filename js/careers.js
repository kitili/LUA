// ============================================
// CAREERS PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Job data with categories (for filtering)
    const jobs = [
        { id: 1, title: 'Senior Software Engineer', location: 'Lagos, Nigeria', category: 'engineering' },
        { id: 2, title: 'Solar Project Manager', location: 'Accra, Ghana', category: 'management' },
        { id: 3, title: 'Business Development Lead', location: 'Nairobi, Kenya', category: 'sales' },
        { id: 4, title: 'Field Engineer', location: 'Cape Town, South Africa', category: 'engineering' },
        { id: 5, title: 'UI/UX Designer', location: 'Johannesburg, South Africa', category: 'design' },
        { id: 6, title: 'Community Relations Manager', location: 'Abuja, Nigeria', category: 'operations' }
    ];

    // Add data attributes to job cards
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach((card, index) => {
        if (jobs[index]) {
            card.setAttribute('data-category', jobs[index].category);
            card.setAttribute('data-id', jobs[index].id);
        }
    });

    // Job Filter Functionality (if filter buttons exist)
    const jobFilters = document.querySelectorAll('.job-filter');
    if (jobFilters.length > 0) {
        jobFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                jobFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.textContent.trim().toLowerCase();
                filterJobs(filterValue);
            });
        });
    }

    // Apply Now Button Functionality
    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const card = this.closest('.job-card');
            const jobId = card.getAttribute('data-id');
            const job = jobs.find(j => j.id === parseInt(jobId));
            
            if (job) {
                // Scroll to quick apply form and pre-fill if possible
                const quickApplyForm = document.querySelector('.quick-apply-form');
                if (quickApplyForm) {
                    quickApplyForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Highlight the form
                    quickApplyForm.style.border = '2px solid var(--bright-yellow)';
                    setTimeout(() => {
                        quickApplyForm.style.border = '';
                    }, 2000);
                }
            }
        });
    });

    // Quick Apply Form Validation and Submission
    const quickApplyForm = document.querySelector('.quick-apply-form') || document.getElementById('career-apply-form');
    
    if (!quickApplyForm) {
        console.error('Career application form not found!');
        return;
    }
    
    if (quickApplyForm) {
        // File upload handling
        const fileInput = quickApplyForm.querySelector('input[type="file"]');
        const fileUploadText = quickApplyForm.querySelector('.file-upload-text');
        
        if (fileInput && fileUploadText) {
            fileInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    // Validate file type
                    const allowedTypes = ['.pdf', '.doc', '.docx'];
                    const fileName = file.name.toLowerCase();
                    const isValidType = allowedTypes.some(type => fileName.endsWith(type));
                    
                    if (!isValidType) {
                        showFileError(fileInput, 'Please upload a PDF, DOC, or DOCX file');
                        fileInput.value = '';
                        fileUploadText.innerHTML = '<i class="fas fa-upload"></i> Upload Your Resume';
                    } else {
                        // Validate file size (max 5MB)
                        const maxSize = 5 * 1024 * 1024; // 5MB
                        if (file.size > maxSize) {
                            showFileError(fileInput, 'File size must be less than 5MB');
                            fileInput.value = '';
                            fileUploadText.innerHTML = '<i class="fas fa-upload"></i> Upload Your Resume';
                        } else {
                            clearFileError(fileInput);
                            fileUploadText.innerHTML = `<i class="fas fa-file"></i> ${file.name}`;
                            fileUploadText.style.color = 'var(--white)';
                        }
                    }
                } else {
                    fileUploadText.innerHTML = '<i class="fas fa-upload"></i> Upload Your Resume';
                }
            });
        }

        // Real-time validation
        const inputs = quickApplyForm.querySelectorAll('input[type="text"], input[type="email"], select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateCareerField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateCareerField(this);
                }
            });
        });

        // Form submission
        quickApplyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            let firstError = null;
            
            // Validate all inputs
            inputs.forEach(input => {
                if (input.hasAttribute('required')) {
                    if (!validateCareerField(input)) {
                        isValid = false;
                        if (!firstError) {
                            firstError = input;
                        }
                    }
                }
            });

            // Validate file upload
            if (fileInput) {
                if (!fileInput.files[0]) {
                    showFileError(fileInput, 'Please upload your resume');
                    isValid = false;
                    if (!firstError) {
                        firstError = fileInput;
                    }
                } else {
                    clearFileError(fileInput);
                }
            }

            if (isValid) {
                submitCareerApplication(this);
            } else {
                showCareerMessage('Please correct the errors in the form.', 'error');
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

    // Animate Job Cards on Scroll
    jobCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });

    // Animate Hero Statistics
    const heroStats = document.querySelectorAll('.hero-stat .stat-number');
    heroStats.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCareerStat(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });

    // Animate Why Join Section
    const whyJoinSection = document.querySelector('.why-join-content');
    if (whyJoinSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });
        
        whyJoinSection.style.opacity = '0';
        whyJoinSection.style.transform = 'translateY(30px)';
        whyJoinSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(whyJoinSection);
    }
});

// Filter Jobs by Category
function filterJobs(category) {
    const jobCards = document.querySelectorAll('.job-card');
    const categoryMap = {
        'all jobs': 'all',
        'engineering': 'engineering',
        'management': 'management',
        'sales': 'sales',
        'design': 'design',
        'operations': 'operations'
    };
    
    const filterCategory = categoryMap[category] || category;
    
    jobCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterCategory === 'all' || cardCategory === filterCategory) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Validate Career Form Field
function validateCareerField(field) {
    // Skip validation for file inputs and buttons
    if (field.type === 'file' || field.tagName === 'BUTTON') {
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
    // Name validation
    else if (field.type === 'text' && (field.placeholder && field.placeholder.includes('Name')) && value) {
        if (value.length < 2) {
            errorMessage = 'Name must be at least 2 characters';
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

// Show File Error
function showFileError(fileInput, message) {
    const formGroup = fileInput.closest('.form-group');
    if (!formGroup) return;
    
    let errorDiv = formGroup.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        formGroup.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
    fileInput.classList.add('error');
}

// Clear File Error
function clearFileError(fileInput) {
    const formGroup = fileInput.closest('.form-group');
    if (!formGroup) return;
    
    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    fileInput.classList.remove('error');
}

// Submit Career Application
function submitCareerApplication(form) {
    const submitBtn = form.querySelector('.submit-application-btn');
    if (!submitBtn) {
        console.error('Submit button not found');
        return;
    }
    
    const originalText = submitBtn.innerHTML;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    // Collect form data
    const nameInput = form.querySelector('#career-name') || form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('#career-email') || form.querySelector('input[type="email"]');
    const fileInput = form.querySelector('#career-resume') || form.querySelector('input[type="file"]');
    const selectInput = form.querySelector('#career-interest') || form.querySelector('select');
    
    const formData = {
        name: nameInput ? nameInput.value : '',
        email: emailInput ? emailInput.value : '',
        resume: fileInput && fileInput.files[0] ? fileInput.files[0].name : 'No file',
        areaOfInterest: selectInput ? selectInput.value : ''
    };

    // ============================================
    // CONFIGURATION: Set your backend endpoint here
    // ============================================
    // Change this to your actual backend API endpoint
    const API_ENDPOINT = '/api/careers/apply'; // Example: 'https://yourdomain.com/api/careers/apply'
    const USE_BACKEND = false; // Set to true when you have a backend ready
    
    // ============================================
    
    if (USE_BACKEND && API_ENDPOINT) {
        // Option 1: Send to your backend API
        const formDataObj = new FormData(form);
        
        fetch(API_ENDPOINT, {
            method: 'POST',
            body: formDataObj
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Success
            showCareerMessage('Thank you! Your application has been submitted successfully. We will review your resume and get back to you soon.', 'success');
            form.reset();
            
            // Reset file upload text
            const fileUploadText = form.querySelector('.file-upload-text');
            if (fileUploadText) {
                fileUploadText.innerHTML = '<i class="fas fa-upload"></i> Upload Your Resume';
                fileUploadText.style.color = '';
            }
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        })
        .catch(error => {
            console.error('Error submitting application:', error);
            showCareerMessage('Sorry, there was an error submitting your application. Please try again or contact us directly at careers@lightupafrica.com', 'error');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    } else {
        // Option 2: Fallback - For testing/demo (currently active)
        // This simulates form submission. In production, set USE_BACKEND = true above
        console.log('Form data (would be sent to backend):', {
            name: nameInput ? nameInput.value : '',
            email: emailInput ? emailInput.value : '',
            resume: fileInput && fileInput.files[0] ? fileInput.files[0].name : 'No file',
            areaOfInterest: selectInput ? selectInput.value : ''
        });
        
        setTimeout(() => {
            // Success message
            showCareerMessage('Thank you! Your application has been submitted successfully. We will review your resume and get back to you soon.', 'success');
            form.reset();
            
            // Reset file upload text
            const fileUploadText = form.querySelector('.file-upload-text');
            if (fileUploadText) {
                fileUploadText.innerHTML = '<i class="fas fa-upload"></i> Upload Your Resume';
                fileUploadText.style.color = '';
            }
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 2000);
    }
    
    // ============================================
    // Alternative: EmailJS Integration
    // ============================================
    // If you want to use EmailJS to send emails directly from the browser:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Install: npm install @emailjs/browser
    // 3. Uncomment and configure the code below:
    /*
    import emailjs from '@emailjs/browser';
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, {
        publicKey: 'YOUR_PUBLIC_KEY'
    })
    .then(() => {
        showCareerMessage('Thank you! Your application has been submitted successfully.', 'success');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    })
    .catch((error) => {
        console.error('EmailJS error:', error);
        showCareerMessage('Sorry, there was an error. Please try again.', 'error');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
    */
}

// Show Career Message
function showCareerMessage(message, type) {
    const form = document.querySelector('.quick-apply-form') || document.getElementById('career-apply-form');
    if (!form) {
        console.error('Form not found for message display');
        alert(message); // Fallback to alert
        return;
    }
    
    let messageDiv = form.querySelector('.career-message');
    
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'career-message';
        // Insert at the beginning of the form
        const firstChild = form.firstElementChild;
        if (firstChild) {
            form.insertBefore(messageDiv, firstChild);
        } else {
            form.appendChild(messageDiv);
        }
    }
    
    messageDiv.textContent = message;
    messageDiv.className = `career-message ${type}`;
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

// Animate Career Statistics
function animateCareerStat(element) {
    const text = element.textContent.trim();
    let target = 0;
    
    if (text.includes('+')) {
        target = parseInt(text.replace('+', ''));
    } else if (text.includes('M')) {
        target = parseFloat(text.replace('M', '')) * 1000000;
    } else if (text.includes('K')) {
        target = parseInt(text.replace('K', '')) * 1000;
    } else {
        target = parseInt(text);
    }
    
    if (target && !isNaN(target)) {
        const hasPlus = text.includes('+');
        const hasM = text.includes('M');
        const hasK = text.includes('K');
        let current = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                if (hasM) {
                    element.textContent = (target / 1000000).toFixed(2) + 'M';
                } else if (hasK) {
                    element.textContent = Math.floor(target / 1000) + 'K';
                } else {
                    element.textContent = Math.floor(target) + (hasPlus ? '+' : '');
                }
                clearInterval(timer);
            } else {
                if (hasM) {
                    element.textContent = (current / 1000000).toFixed(2) + 'M';
                } else if (hasK) {
                    element.textContent = Math.floor(current / 1000) + 'K';
                } else {
                    element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                }
            }
        }, 20);
    }
}

// Add CSS for career form messages
const style = document.createElement('style');
style.textContent = `
    .career-message {
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        font-weight: 500;
        opacity: 1;
        transition: opacity 0.3s;
    }
    
    .career-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .career-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    .quick-apply-form input.error,
    .quick-apply-form select.error {
        border-color: #dc3545;
    }
    
    .submit-application-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

