document.addEventListener('DOMContentLoaded', function() {
    const initialHeader = document.getElementById('initial-header');
    const mainHeader = document.getElementById('main-header');
    const heroSection = document.getElementById('hero');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-header .nav-link');
    const logoLinks = document.querySelectorAll('.logo');
    const indicator = document.querySelector('.main-header .indicator');
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');


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

 // Smooth scroll to the top when the logo is clicked
 logoLinks.forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Update red line indicator based on the active section
function updateIndicator() {
    let activeSection = null;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeSection = section;
        }
    });

    if (activeSection) {
        const activeLink = document.querySelector(
            `.main-header .nav-link[href="#${activeSection.id}"]`
        );

        if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const containerRect = document
                .querySelector('.main-header .container')
                .getBoundingClientRect();

            indicator.style.left = `${linkRect.left - containerRect.left}px`;
            indicator.style.width = `${linkRect.width}px`;
        }
    }
}

window.addEventListener('scroll', updateIndicator);


//TAB PANES
tabItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Remove active class from all tabs and panes
      tabItems.forEach(tab => tab.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // Add active class to the clicked tab and corresponding pane
      item.classList.add('active');
      tabPanes[index].classList.add('active');
    });
  });

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Adjust mobile menu display on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

});