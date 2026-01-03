// Navigation Toggle for Mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// FAQ Toggle Function
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];
    const isActive = currentItem.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        currentItem.classList.add('active');
    }
}

// Application Form Toggle
const startApplicationBtn = document.getElementById('start-application');
const applicationForm = document.getElementById('application-form');
const closeFormBtn = document.getElementById('close-form');

if (startApplicationBtn && applicationForm) {
    startApplicationBtn.addEventListener('click', () => {
        applicationForm.classList.remove('hidden');
        applicationForm.scrollIntoView({ behavior: 'smooth' });
    });
}

if (closeFormBtn && applicationForm) {
    closeFormBtn.addEventListener('click', () => {
        applicationForm.classList.add('hidden');
    });
}

// Download Application Form (from local /forms folder)
const downloadFormBtn = document.getElementById('download-form');
if (downloadFormBtn) {
    downloadFormBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'forms/application-form.pdf'; // hosted locally
        link.download = 'Bright_Future_Academy_Application_Form.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert('Application form downloaded successfully!');
    });
}


// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simulate form submission
        alert(`Thank you ${name}! Your message has been received. We will get back to you soon at ${email}.`);
        contactForm.reset();
    });
}

// Application Form Submission
const applicationFormElement = document.querySelector('.application-form form');
if (applicationFormElement) {
    applicationFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        alert('Application submitted successfully! You will receive a confirmation email within 24 hours.');
        applicationForm.classList.add('hidden');
        applicationFormElement.reset();
    });
}

// Smooth scrolling for anchor links
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

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(13, 27, 42, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(13, 27, 42, 0.95)';
        }
    }
});

// Add animation class to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .mission-card, .team-member, .step, .gallery-item, .requirement-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
});