document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.gr-mobile-menu-btn');
    const navLinks = document.querySelector('.gr-nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Tabs Functionality
    const tabButtons = document.querySelectorAll('.gr-tab-btn');
    const tabContents = document.querySelectorAll('.gr-tab-content');

    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                tabContents[index].classList.add('active');
            });
        });
    }

    // Smooth Scroll for Navigation Links
    const navLinksScroll = document.querySelectorAll('a[href^="#"]');
    navLinksScroll.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form Validation (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    });

    // Header Scroll Behavior
    const header = document.querySelector('.initial-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Demo/Contact Button Handlers
    const demoButtons = document.querySelectorAll('.gr-btn-primary, .btn-primary');
    const contactButtons = document.querySelectorAll('.btn-secondary');

    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Demo request submitted. Our team will contact you soon!');
        });
    });

    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Contact form initiated. Please fill out your details.');
        });
    });

    // Ensure responsive behavior for full-width sections
    function adjustFullWidthSections() {
        const fullWidthSections = document.querySelectorAll('.full-width');
        fullWidthSections.forEach(section => {
            section.style.width = '100%';
            section.style.maxWidth = '100%';
        });
    }

    // Call on load and resize
    adjustFullWidthSections();
    window.addEventListener('resize', adjustFullWidthSections);

    // Optional: Add scroll animations or interactions
    const animatedSections = document.querySelectorAll('.full-width');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});