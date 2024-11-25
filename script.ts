document.addEventListener('DOMContentLoaded', function() {
    const initialHeader = document.getElementById('initial-header');
    const mainHeader = document.getElementById('main-header');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-header .nav-link');

    // Initialize Lucide icons
    lucide.createIcons();

    // Show/hide headers based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroSection = document.getElementById('hero');
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
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
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
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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
    const words = ["Simply", "Smarter", "Confidently", "Easily"];
    let currentIndex = 0;
    const animatedText = document.getElementById('animated-text');

    function changeWord() {
        animatedText.style.opacity = 0;
        setTimeout(() => {
            animatedText.textContent = words[currentIndex];
            animatedText.style.opacity = 1;
            currentIndex = (currentIndex + 1) % words.length;
        }, 500);
    }

    setInterval(changeWord, 3000);

    // Full-page scrolling
    let isScrolling = false;
    window.addEventListener('wheel', function(e) {
        if (!isScrolling) {
            isScrolling = true;
            if (e.deltaY > 0) {
                // Scroll down
                const nextSection = document.querySelector('.section.active').nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Scroll up
                const prevSection = document.querySelector('.section.active').previousElementSibling;
                if (prevSection) {
                    prevSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }
    });

    // Set active section on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.section.active')?.classList.remove('active');
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});

