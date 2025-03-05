// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section

        if (targetSection) {
            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation for the contact form
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate inputs
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.'); // Show error message
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.'); // Show error message
            return;
        }

        // If validation passes, submit the form (you can replace this with an AJAX request)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset(); // Clear the form
    });
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
}

// Optional: Add interactivity to social media links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)'; // Reset size on mouse leave
    });
});