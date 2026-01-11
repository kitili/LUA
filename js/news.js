// ============================================
// NEWS PAGE FUNCTIONALITIES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Article data with categories
    const articles = [
        { id: 1, title: 'Revolutionary Solar Technology Powers 10,000 Homes Across Kenya', category: 'industry', date: 'Oct 24, 2023', featured: true },
        { id: 2, title: 'AI-Powered Grid Optimization Reduces Energy Waste by 40%', category: 'industry', date: 'Oct 18, 2023', featured: false },
        { id: 3, title: '1000 Schools Powered: Education Through Clean Energy', category: 'case-study', date: 'Oct 10, 2023', featured: false },
        { id: 4, title: 'Hybrid Systems: Solar + Wind = 24/7 Clean Power', category: 'industry', date: 'Sep 28, 2023', featured: false },
        { id: 5, title: 'Global Partnerships Accelerate Solar Expansion', category: 'press-release', date: 'Sep 15, 2023', featured: false },
        { id: 6, title: 'Smart Grid Technology: The Future of Energy', category: 'industry', date: 'Sep 01, 2023', featured: false }
    ];

    // Add data attributes to articles
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach((card, index) => {
        if (articles[index]) {
            const category = articles[index].category;
            card.setAttribute('data-category', category);
            card.setAttribute('data-id', articles[index].id);
            card.setAttribute('data-title', articles[index].title.toLowerCase());
        }
    });

    // Filter Tabs Functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            const filterValue = this.textContent.trim().toLowerCase();
            filterArticles(filterValue);
        });
    });

    // Sort Dropdown Functionality
    const sortSelect = document.querySelector('.sort-dropdown select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortArticles(this.value);
        });
    }

    // Search Functionality (add search input if not exists)
    addSearchFunctionality();

    // Load More Articles Functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            loadMoreArticles();
        });
    }

    // Subscription Form Validation
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (validateEmail(emailInput.value)) {
                // Show success message
                showSubscriptionMessage('success', 'Thank you for subscribing! You will receive our latest updates.');
                emailInput.value = '';
            } else {
                showSubscriptionMessage('error', 'Please enter a valid email address.');
            }
        });
    }

    // Animate articles on scroll
    articleCards.forEach((card, index) => {
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
});

// Filter Articles by Category
function filterArticles(category) {
    const articleCards = document.querySelectorAll('.article-card');
    const categoryMap = {
        'all articles': 'all',
        'press releases': 'press-release',
        'industry news': 'industry',
        'case studies': 'case-study',
        'interviews': 'interview'
    };
    
    const filterCategory = categoryMap[category] || category;
    
    articleCards.forEach(card => {
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

// Sort Articles
function sortArticles(sortBy) {
    const articlesGrid = document.querySelector('.articles-grid');
    const articleCards = Array.from(document.querySelectorAll('.article-card:not(.featured)'));
    const featuredCard = document.querySelector('.article-card.featured');
    
    // Sort articles based on sort option
    articleCards.sort((a, b) => {
        const dateA = new Date(a.querySelector('.article-date').textContent);
        const dateB = new Date(b.querySelector('.article-date').textContent);
        
        if (sortBy === 'Latest') {
            return dateB - dateA;
        } else if (sortBy === 'Oldest') {
            return dateA - dateB;
        } else {
            // Most Popular - random for demo
            return Math.random() - 0.5;
        }
    });
    
    // Re-append sorted articles
    if (featuredCard) {
        articlesGrid.insertBefore(featuredCard, articlesGrid.firstChild);
    }
    
    articleCards.forEach(card => {
        articlesGrid.appendChild(card);
    });
}

// Add Search Functionality
function addSearchFunctionality() {
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon && !document.querySelector('.news-search-container')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'news-search-container';
        searchContainer.innerHTML = `
            <input type="text" class="news-search-input" placeholder="Search articles...">
            <button class="news-search-btn"><i class="fas fa-search"></i></button>
        `;
        
        searchIcon.addEventListener('click', function() {
            if (searchContainer.style.display === 'block') {
                searchContainer.style.display = 'none';
            } else {
                searchContainer.style.display = 'block';
                searchContainer.querySelector('.news-search-input').focus();
            }
        });
        
        const searchInput = searchContainer.querySelector('.news-search-input');
        const searchBtn = searchContainer.querySelector('.news-search-btn');
        
        const performSearch = () => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const articleCards = document.querySelectorAll('.article-card');
            
            articleCards.forEach(card => {
                const title = card.getAttribute('data-title') || '';
                const content = card.textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        };
        
        searchInput.addEventListener('input', performSearch);
        searchBtn.addEventListener('click', performSearch);
        
        document.querySelector('.nav-container').appendChild(searchContainer);
    }
}

// Load More Articles
function loadMoreArticles() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const articlesGrid = document.querySelector('.articles-grid');
    
    // Simulate loading more articles
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    
    setTimeout(() => {
        // In a real application, you would fetch more articles from an API
        loadMoreBtn.textContent = 'No More Articles';
        loadMoreBtn.style.opacity = '0.5';
        loadMoreBtn.style.cursor = 'not-allowed';
        
        // Show message
        showMessage('All articles have been loaded.', 'info');
    }, 1500);
}

// Show Subscription Message
function showSubscriptionMessage(type, message) {
    const form = document.querySelector('.subscribe-form');
    let messageDiv = form.querySelector('.subscription-message');
    
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'subscription-message';
        form.appendChild(messageDiv);
    }
    
    messageDiv.textContent = message;
    messageDiv.className = `subscription-message ${type}`;
    
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 3000);
}

// Show General Message
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast ${type}`;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// Add CSS for search and messages
const style = document.createElement('style');
style.textContent = `
    .news-search-container {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 1rem;
        display: none;
        background: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        z-index: 1000;
        min-width: 300px;
    }
    
    .news-search-container {
        display: flex;
        gap: 0.5rem;
    }
    
    .news-search-input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        font-size: 1rem;
    }
    
    .news-search-btn {
        padding: 10px 15px;
        background: var(--bright-yellow);
        color: var(--dark-blue);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .subscription-message {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        opacity: 1;
        transition: opacity 0.3s;
    }
    
    .subscription-message.success {
        background: #d4edda;
        color: #155724;
    }
    
    .subscription-message.error {
        background: #f8d7da;
        color: #721c24;
    }
    
    .message-toast {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: var(--dark-blue);
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .message-toast.info {
        background: var(--blue);
    }
    
    .message-toast.success {
        background: var(--green);
    }
    
    .message-toast.error {
        background: #dc3545;
    }
`;
document.head.appendChild(style);

