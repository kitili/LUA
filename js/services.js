// ============================================
// SERVICES PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Animate Service Cards on Scroll
    const serviceCards = document.querySelectorAll('.service-card-6');
    
    serviceCards.forEach((card, index) => {
        // Add animation delay for staggered effect
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Enhanced hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Add click interaction to navigate to quote page
        card.addEventListener('click', function(e) {
            // Only trigger if not clicking on a link
            if (!e.target.closest('a')) {
                // Could navigate to quote page or show more details
                // For now, just add visual feedback
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                }, 150);
            }
        });
    });

    // Animate Feature Cards in "What Makes Us Different" section
    const featureCards = document.querySelectorAll('.feature-card-different');
    
    featureCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateX(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });

    // Animate Service Features List Items
    serviceCards.forEach(card => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const features = entry.target.querySelectorAll('.service-features li');
                    features.forEach((feature, index) => {
                        setTimeout(() => {
                            feature.style.opacity = '0';
                            feature.style.transform = 'translateX(-20px)';
                            feature.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            
                            setTimeout(() => {
                                feature.style.opacity = '1';
                                feature.style.transform = 'translateX(0)';
                            }, 50);
                        }, index * 50);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(card);
    });

    // Scroll Animation for Sections
    const sections = document.querySelectorAll('.energy-solutions, .what-makes-different');
    
    sections.forEach(section => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        // Set initial state
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(section);
    });

    // Animate "What Makes Us Different" Image
    const differentImage = document.querySelector('.different-image');
    if (differentImage) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.2 });
        
        differentImage.style.opacity = '0';
        differentImage.style.transform = 'translateX(-50px)';
        differentImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(differentImage);
    }

    // Add "Get Quote" button to service cards (optional enhancement)
    serviceCards.forEach(card => {
        const cardBody = card.querySelector('.service-card-body');
        if (cardBody && !cardBody.querySelector('.service-quote-btn')) {
            const quoteBtn = document.createElement('a');
            quoteBtn.href = 'quote.html';
            quoteBtn.className = 'service-quote-btn';
            quoteBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Get Quote';
            quoteBtn.style.cssText = `
                display: inline-block;
                margin-top: 1rem;
                padding: 10px 20px;
                background: var(--bright-yellow);
                color: var(--dark-blue);
                text-decoration: none;
                border-radius: 5px;
                font-weight: 600;
                transition: transform 0.3s ease;
            `;
            
            quoteBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });
            
            quoteBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
            
            cardBody.appendChild(quoteBtn);
        }
    });

    // Parallax effect for hero section (subtle)
    const heroSection = document.querySelector('.services-hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = heroSection.querySelector('.services-hero-content');
            if (heroContent && scrolled < heroSection.offsetHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / heroSection.offsetHeight) * 0.5;
            }
        });
    }
});

// Add CSS for service card animations
const style = document.createElement('style');
style.textContent = `
    .service-card-6 {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }
    
    .service-card-6:hover {
        box-shadow: 0 15px 40px rgba(0,0,0,0.2) !important;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card-6.animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .service-features li {
        opacity: 0;
        transform: translateX(-20px);
    }
    
    .service-features li.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
`;
document.head.appendChild(style);

