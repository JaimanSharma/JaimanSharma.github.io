// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarUl = document.querySelector('.navbar ul');
    
    hamburger.addEventListener('click', function() {
        navbarUl.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = hamburger.contains(event.target) || navbarUl.contains(event.target);
        
        if (!isClickInside && navbarUl.classList.contains('active')) {
            navbarUl.classList.remove('active');
        }
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you ${name} for your message! I will get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
