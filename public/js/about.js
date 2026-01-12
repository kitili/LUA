// ============================================
// ABOUT PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Animate Value Cards on Scroll
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach((card, index) => {
        // Add animation delay for staggered effect
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animate Region Cards Statistics
    const regionCards = document.querySelectorAll('.region-card');
    
    regionCards.forEach(card => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateRegionStats(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(card);
    });

    // Join Our Team Button
    const joinTeamBtn = document.querySelector('.rev-btn.dark');
    if (joinTeamBtn) {
        joinTeamBtn.addEventListener('click', function() {
            window.location.href = 'careers.html';
        });
    }

    // Contact Us Button
    const contactBtn = document.querySelector('.rev-btn.light');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }

    // Hero Indicators (if carousel functionality needed)
    const indicators = document.querySelectorAll('.hero-indicators .indicator');
    if (indicators.length > 0) {
        // Simple indicator animation
        let currentIndicator = 0;
        setInterval(() => {
            indicators.forEach(ind => ind.classList.remove('active'));
            indicators[currentIndicator].classList.add('active');
            currentIndicator = (currentIndicator + 1) % indicators.length;
        }, 3000);
    }

    // Scroll Animation for Sections
    const sections = document.querySelectorAll('.our-story, .continental-reach, .join-revolution');
    
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
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(section);
    });

    // Animate Story Image on Scroll
    const storyImage = document.querySelector('.story-image-wrapper');
    if (storyImage) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.2 });
        
        storyImage.style.opacity = '0';
        storyImage.style.transform = 'translateX(-50px)';
        storyImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(storyImage);
    }

    // Animate Story Text on Scroll
    const storyText = document.querySelector('.story-text');
    if (storyText) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.2 });
        
        storyText.style.opacity = '0';
        storyText.style.transform = 'translateX(50px)';
        storyText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(storyText);
    }
});

// Animate Region Statistics
function animateRegionStats(card) {
    const stats = card.querySelectorAll('.region-list li');
    
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.opacity = '0';
            stat.style.transform = 'translateY(20px)';
            stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

// Add CSS for value card animations
const style = document.createElement('style');
style.textContent = `
    .value-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .value-card:hover {
        box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
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
    
    .value-card.animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

