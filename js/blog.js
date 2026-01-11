// ============================================
// BLOG/PROJECTS PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Project data with categories
    const projects = [
        { id: 1, title: 'Lagos Industrial Complex', category: 'commercial', description: '120 MW of solar PV installed, powering manufacturing facilities.', metrics: { energy: '250 kWh', homes: '120 Homes', co2: '490 CO2' } },
        { id: 2, title: 'Maasai Village School', category: 'rural', description: 'Solar power bringing electricity to schools, improving education.', metrics: { energy: '15 kWh', homes: '30 Homes', co2: '200 CO2' } },
        { id: 3, title: 'Johannesburg Suburb', category: 'residential', description: '175 homes equipped with integrated solar solutions.', metrics: { energy: '200 kWh', homes: '175 Homes', co2: '600 CO2' } },
        { id: 4, title: 'Atlas Solar Farm', category: 'commercial', description: '50 MW of PV power, providing clean energy to the grid.', metrics: { energy: '10,000 kWh', homes: '25,000 Homes', co2: '10,000 CO2' } },
        { id: 5, title: 'Ghana Water Project', category: 'rural', description: 'Solar-powered water pump for local communities.', metrics: { energy: '10 kWh', homes: '1,500 People', co2: '100% Access' } },
        { id: 6, title: 'Nairobi Medical Center', category: 'commercial', description: '200 kW solar array, providing reliable power for the hospital.', metrics: { energy: '5,000 kWh', homes: '5,000 Patients', co2: '18,000 CO2' } }
    ];

    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card-new');
    
    // Add data attributes to project cards
    projectCards.forEach((card, index) => {
        if (projects[index]) {
            card.setAttribute('data-category', projects[index].category);
            card.setAttribute('data-id', projects[index].id);
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.textContent.trim().toLowerCase();
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all projects' || category === filterValue.replace(' ', '-')) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // View Details Button - Open Modal
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    
    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const card = this.closest('.project-card-new');
            const projectId = card.getAttribute('data-id');
            const project = projects.find(p => p.id === parseInt(projectId));
            
            if (project) {
                openProjectModal(project);
            }
        });
    });

    // Animate Hero Statistics
    const heroStats = document.querySelectorAll('.hero-stat .stat-number');
    
    heroStats.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateHeroStat(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });

    // Scroll Animation for Project Cards
    projectCards.forEach((card, index) => {
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
        }, { threshold: 0.1 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });

    // CTA Buttons Functionality
    const ctaButtons = document.querySelectorAll('.cta-btn-primary, .cta-btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Start New Project')) {
                window.location.href = 'quote.html';
            } else if (this.textContent.includes('Download Portfolio')) {
                // Simulate download
                alert('Portfolio download will be available soon!');
            }
        });
    });
});

// Open Project Modal
function openProjectModal(project) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'project-modal-overlay';
    modal.innerHTML = `
        <div class="project-modal">
            <button class="modal-close">&times;</button>
            <div class="modal-content">
                <h2>${project.title}</h2>
                <p class="modal-description">${project.description}</p>
                <div class="modal-metrics">
                    <div class="modal-metric">
                        <strong>Energy Generated:</strong> ${project.metrics.energy}
                    </div>
                    <div class="modal-metric">
                        <strong>Impact:</strong> ${project.metrics.homes}
                    </div>
                    <div class="modal-metric">
                        <strong>CO2 Saved:</strong> ${project.metrics.co2}
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="modal-btn-primary" onclick="window.location.href='quote.html'">Get Similar Project</button>
                    <button class="modal-btn-secondary modal-close-btn">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const closeBtnSecondary = modal.querySelector('.modal-close-btn');
    
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    closeBtnSecondary.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Animate modal in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Animate Hero Statistics
function animateHeroStat(element) {
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

// Add CSS for modal
const style = document.createElement('style');
style.textContent = `
    .project-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .project-modal {
        background: white;
        border-radius: 15px;
        padding: 2.5rem;
        max-width: 600px;
        width: 90%;
        position: relative;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .project-modal-overlay.show .project-modal {
        transform: scale(1);
    }
    
    .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        transition: color 0.3s;
    }
    
    .modal-close:hover {
        color: #000;
    }
    
    .modal-content h2 {
        color: var(--dark-blue);
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    
    .modal-description {
        color: var(--text-light);
        margin-bottom: 2rem;
        line-height: 1.7;
    }
    
    .modal-metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 10px;
    }
    
    .modal-metric {
        text-align: center;
    }
    
    .modal-metric strong {
        display: block;
        color: var(--dark-blue);
        margin-bottom: 0.5rem;
    }
    
    .modal-actions {
        display: flex;
        gap: 1rem;
    }
    
    .modal-btn-primary,
    .modal-btn-secondary {
        flex: 1;
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.3s;
    }
    
    .modal-btn-primary {
        background: var(--bright-yellow);
        color: var(--dark-blue);
    }
    
    .modal-btn-secondary {
        background: var(--dark-blue);
        color: white;
    }
    
    .modal-btn-primary:hover,
    .modal-btn-secondary:hover {
        transform: translateY(-2px);
    }
    
    .project-card-new {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(style);

