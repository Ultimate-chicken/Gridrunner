document.addEventListener('DOMContentLoaded', function() {
    // Error-safe element selection
    const initialHeader = document.getElementById('initial-header');
    const mainHeader = document.getElementById('main-header');
    const heroSection = document.getElementById('hero');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-header .nav-link');

    // Ensure all critical elements exist
    if (!initialHeader || !mainHeader || !heroSection) {
        console.error('Critical page elements are missing');
        return;
    }

    // Initialize Lucide icons (ensure Lucide script is loaded)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Show/hide headers based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

        if (scrollPosition > heroBottom - 80) {
            initialHeader.style.transform = 'translateY(-100%)';
            mainHeader.style.transform = 'translateY(0)';
        } else {
            initialHeader.style.transform = 'translateY(0)';
            mainHeader.style.transform = 'translateY(-100%)';
        }
    });

    // Highlight active section in navigation
    function highlightActiveSection() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Platform feature accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // Animated text
    const words = ["Smarter", "Confidently", "Easily"];
    let currentIndex = 0;
    const animatedText = document.getElementById('animated-text');

    function changeWord() {
        if (animatedText) {
            animatedText.style.opacity = '0';
            setTimeout(() => {
                if (animatedText) {
                    animatedText.textContent = words[currentIndex];
                    animatedText.style.opacity = '1';
                    currentIndex = (currentIndex + 1) % words.length;
                }
            }, 500);
        }
    }

    // Start word animation
    if (animatedText) {
        setInterval(changeWord, 3000);
    }

    // Intersection Observer for active sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
                document.querySelectorAll('.section.active').forEach(el => el.classList.remove('active'));
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});