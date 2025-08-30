// Main JavaScript functionality for Patrick Udoh Portfolio
// Author: Patrick Udoh
// Version: 1.0.0

(function() {
    'use strict';

    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const contactForm = document.getElementById('contact-form');
    const backToTopButton = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link');
    const projectFilters = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');

    // State
    let currentTheme = localStorage.getItem('theme') || 'light';
    let isMenuOpen = false;

    // Initialize application
    function init() {
        setupTheme();
        setupNavigation();
        setupMobileMenu();
        setupScrollAnimations();
        setupContactForm();
        setupProjectFilters();
        setupBackToTop();
        setupSmoothScrolling();
    }

    // Theme Management
    function setupTheme() {
        // Set initial theme
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggle.classList.add('dark');
            themeToggle.setAttribute('aria-checked', 'true');
        }

        // Theme toggle event listener
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            document.documentElement.classList.remove('dark');
            themeToggle.classList.remove('dark');
            themeToggle.setAttribute('aria-checked', 'false');
            currentTheme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            themeToggle.classList.add('dark');
            themeToggle.setAttribute('aria-checked', 'true');
            currentTheme = 'dark';
        }

        localStorage.setItem('theme', currentTheme);
    }

    // Navigation Management
    function setupNavigation() {
        // Update active navigation link based on scroll position
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Add click handlers to navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    function handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = 80; // Account for fixed header
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        if (isMenuOpen) {
            toggleMobileMenu();
        }
    }

    // Mobile Menu Management
    function setupMobileMenu() {
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', toggleMobileMenu);
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                toggleMobileMenu();
            }
        });
    }

    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
        
        if (mobileMenuButton) {
            mobileMenuButton.setAttribute('aria-expanded', isMenuOpen.toString());
            
            // Update button icon
            const icon = mobileMenuButton.querySelector('svg path');
            if (icon) {
                if (isMenuOpen) {
                    icon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // X icon
                } else {
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger icon
                }
            }
        }
    }

    // Scroll Animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Contact Form Management
    function setupContactForm() {
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
            
            // Real-time validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', validateField);
                input.addEventListener('input', clearFieldError);
            });
        }
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const submitText = document.getElementById('submit-text');
        const submitLoading = document.getElementById('submit-loading');
        const successMessage = document.getElementById('form-success');
        
        // Validate form
        if (!validateForm()) {
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');

        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            // Submit to Formspree (replace with your endpoint)
            const response = await fetch('https://formspree.io/f/xpwagkzr', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                successMessage.classList.remove('hidden');
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
        }
    }

    function validateForm() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            showFieldError('name', 'Name is required');
            isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            showFieldError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            showFieldError('message', 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showFieldError('message', 'Message must be at least 10 characters long');
            isValid = false;
        }

        return isValid;
    }

    function validateField(e) {
        const field = e.target;
        const fieldName = field.name;
        const value = field.value.trim();

        clearFieldError(fieldName);

        switch (fieldName) {
            case 'name':
                if (!value) {
                    showFieldError('name', 'Name is required');
                }
                break;
            case 'email':
                if (!value) {
                    showFieldError('email', 'Email is required');
                } else if (!isValidEmail(value)) {
                    showFieldError('email', 'Please enter a valid email address');
                }
                break;
            case 'message':
                if (!value) {
                    showFieldError('message', 'Message is required');
                } else if (value.length < 10) {
                    showFieldError('message', 'Message must be at least 10 characters long');
                }
                break;
        }
    }

    function showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const fieldElement = document.getElementById(fieldName);
        
        if (errorElement) {
            errorElement.textContent = message;
        }
        
        if (fieldElement) {
            fieldElement.classList.add('border-red-500');
        }
    }

    function clearFieldError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const fieldElement = document.getElementById(fieldName);
        
        if (errorElement) {
            errorElement.textContent = '';
        }
        
        if (fieldElement) {
            fieldElement.classList.remove('border-red-500');
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Project Filtering
    function setupProjectFilters() {
        projectFilters.forEach(filter => {
            filter.addEventListener('click', handleFilterClick);
        });
    }

    function handleFilterClick(e) {
        const filterValue = e.target.getAttribute('data-filter');
        
        // Update active filter
        projectFilters.forEach(filter => filter.classList.remove('active'));
        e.target.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                card.classList.add('animate-on-scroll');
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Back to Top Button
    function setupBackToTop() {
        if (backToTopButton) {
            backToTopButton.addEventListener('click', scrollToTop);
        }

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.pointerEvents = 'auto';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.pointerEvents = 'none';
            }
        });
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Smooth Scrolling for all internal links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimization: debounce scroll events
    window.addEventListener('scroll', debounce(updateActiveNavLink, 10));

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Handle page visibility changes for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations or heavy operations when page is hidden
        } else {
            // Resume when page becomes visible
        }
    });

    // Error handling for uncaught errors
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // Could send error reports to analytics service here
    });

})();
