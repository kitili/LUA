// ============================================
// TESTIMONIALS PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Video Modal Functionality
    const playButtons = document.querySelectorAll('.play-button');
    const videoCards = document.querySelectorAll('.video-card');
    
    const videoData = [
        {
            title: 'Enterprise Solar Success',
            description: 'How Kwasi Obeng saves over 30% in kWh renewable energy.',
            videoId: 'demo-video-1' // Replace with actual video ID/URL
        },
        {
            title: 'Manufacturing Excellence',
            description: 'How LightUp Africa increased industrial power usage.',
            videoId: 'demo-video-2' // Replace with actual video ID/URL
        }
    ];
    
    playButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (videoData[index]) {
                openVideoModal(videoData[index]);
            }
        });
    });

    // Animate Testimonial Cards on Scroll
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
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

    // Animate Featured Testimonial
    const featuredTestimonial = document.querySelector('.featured-testimonial-card');
    if (featuredTestimonial) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });
        
        featuredTestimonial.style.opacity = '0';
        featuredTestimonial.style.transform = 'translateY(30px)';
        featuredTestimonial.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(featuredTestimonial);
    }

    // Animate Statistics
    const testimonialStats = document.querySelectorAll('.testimonial-stat-number');
    testimonialStats.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTestimonialStat(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });

    // CTA Buttons Functionality
    const scheduleBtn = document.querySelector('.cta-btn-blue');
    const downloadBtn = document.querySelector('.cta-btn-white');
    
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Simulate download
            alert('Case studies download will be available soon!');
        });
    }

    // Animate Certification Cards
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });
});

// Open Video Modal
function openVideoModal(videoData) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'video-modal-overlay';
    modal.innerHTML = `
        <div class="video-modal">
            <button class="video-modal-close">&times;</button>
            <div class="video-modal-content">
                <h3>${videoData.title}</h3>
                <p>${videoData.description}</p>
                <div class="video-player">
                    <div class="video-placeholder-modal">
                        <i class="fas fa-play-circle"></i>
                        <p>Video Player</p>
                        <small>In production, this would embed a YouTube/Vimeo video</small>
                    </div>
                    <!-- In production, replace with actual video embed:
                    <iframe src="https://www.youtube.com/embed/${videoData.videoId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                    -->
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.video-modal-close');
    
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    // Animate modal in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Animate Testimonial Statistics
function animateTestimonialStat(element) {
    const text = element.textContent.trim();
    let target = 0;
    
    if (text.includes('+')) {
        target = parseInt(text.replace('+', ''));
    } else if (text.includes('%')) {
        target = parseInt(text.replace('%', ''));
    } else if (text.includes('K')) {
        target = parseInt(text.replace('K', '')) * 1000;
    } else {
        target = parseInt(text);
    }
    
    if (target && !isNaN(target)) {
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const hasK = text.includes('K');
        let current = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                if (hasPercent) {
                    element.textContent = target + '%';
                } else if (hasK) {
                    element.textContent = Math.floor(target / 1000) + 'K';
                } else {
                    element.textContent = Math.floor(target) + (hasPlus ? '+' : '');
                }
                clearInterval(timer);
            } else {
                if (hasPercent) {
                    element.textContent = Math.floor(current) + '%';
                } else if (hasK) {
                    element.textContent = Math.floor(current / 1000) + 'K';
                } else {
                    element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                }
            }
        }, 20);
    }
}

// Add CSS for video modal
const style = document.createElement('style');
style.textContent = `
    .video-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .video-modal {
        background: white;
        border-radius: 15px;
        padding: 2rem;
        max-width: 900px;
        width: 90%;
        position: relative;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .video-modal-overlay.show .video-modal {
        transform: scale(1);
    }
    
    .video-modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        transition: color 0.3s;
        z-index: 1;
    }
    
    .video-modal-close:hover {
        color: #000;
    }
    
    .video-modal-content h3 {
        color: var(--dark-blue);
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
    }
    
    .video-modal-content > p {
        color: var(--text-light);
        margin-bottom: 1.5rem;
    }
    
    .video-player {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        background: #000;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .video-placeholder-modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 3rem;
    }
    
    .video-placeholder-modal p {
        margin-top: 1rem;
        font-size: 1.2rem;
    }
    
    .video-placeholder-modal small {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 0.5rem;
    }
    
    .video-player iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
document.head.appendChild(style);

