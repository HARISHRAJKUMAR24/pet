// Toggle mobile navigation
const mobileNavToggle = document.getElementById('mobileNavToggle');
const navLinks = document.getElementById('navLinks');

mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileNavToggle.classList.toggle('active');

    // Change icon based on menu state
    const icon = mobileNavToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileNavToggle.classList.remove('active');
        const icon = mobileNavToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileNavToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Toggle FAQ items
function toggleFaq(element) {
    element.classList.toggle('active');
}

// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    scrollProgress.style.width = progressHeight + '%';
});

// Mouse trail effect
document.addEventListener('mousemove', (e) => {
    const trails = document.querySelectorAll('.mouse-trail');
    let x = e.pageX;
    let y = e.pageY;

    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = (x - 10) + 'px';
            trail.style.top = (y - 10) + 'px';
            trail.style.transform = 'scale(1)';
            setTimeout(() => {
                trail.style.transform = 'scale(0)';
            }, 500);
        }, index * 100);
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
