// ============================================
// HOME PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Animate Statistics Counters
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const text = stat.textContent.trim();
        let target = 0;
        
        // Extract number from text (handles 120+, 15, 30K, etc.)
        if (text.includes('+')) {
            target = parseInt(text.replace('+', ''));
        } else if (text.includes('K')) {
            target = parseInt(text.replace('K', '')) * 1000;
        } else {
            target = parseInt(text);
        }
        
        if (target && !isNaN(target)) {
            // Reset to 0
            stat.textContent = '0';
            
            // Animate when in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(stat, target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(stat);
        }
    });

    // Smooth scroll for "Learn More" links
    document.querySelectorAll('.learn-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to services section or navigate to services page
            const servicesSection = document.getElementById('service');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = 'services.html';
            }
        });
    });

    // CTA Button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.location.href = 'quote.html';
        });
    }

    // "Get A Quote" button in hero (if exists)
    const heroQuoteBtn = document.querySelector('.hero .quote-btn');
    if (heroQuoteBtn) {
        heroQuoteBtn.addEventListener('click', function() {
            window.location.href = 'quote.html';
        });
    }
});

// Counter animation function
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    const originalText = element.textContent;
    const hasPlus = originalText.includes('+');
    const hasK = originalText.includes('K');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            if (hasK) {
                element.textContent = (target / 1000).toFixed(0) + 'K';
            } else {
                element.textContent = Math.floor(target) + (hasPlus ? '+' : '');
            }
            clearInterval(timer);
        } else {
            if (hasK) {
                element.textContent = Math.floor(current / 1000) + 'K';
            } else {
                element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
            }
        }
    }, 16);
}

