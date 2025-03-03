let index = 0;
        const slider = document.querySelector('.testimonial-slider');
        const totalSlides = document.querySelectorAll('.testimonial-card').length;

        document.getElementById('next').addEventListener('click', () => {
            index = (index + 1) % totalSlides;
            slider.style.transform = `translateX(-${index * 33.33}%)`;
        });

        document.getElementById('prev').addEventListener('click', () => {
            index = (index - 1 + totalSlides) % totalSlides;
            slider.style.transform = `translateX(-${index * 33.33}%)`;
        });
        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });
