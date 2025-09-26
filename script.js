
    // Mobile menu functionality
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menuToggle');
        const navbar = document.getElementById('navbar');
        
        if (menuToggle && navbar) {
            menuToggle.addEventListener('click', function() {
                navbar.classList.toggle('active');
                // Toggle between hamburger and close icon
                const icon = this.querySelector('i');
                if (navbar.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
            
            // Close menu when clicking on a link
            const navLinks = navbar.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navbar.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                });
            });
        }
        
        // Simple animation trigger on scroll
        const animateElements = document.querySelectorAll('.animate');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Slower fade-in animation
                    entry.target.style.transition = 'opacity 2s ease, transform 2s ease';
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });

        // Typed.js initialization with slower speed
        var typed = new Typed(".text", {
            strings: ["Web Developer.", "Frontend Developer.", "UI/UX Designer.", "Creator."],
            typeSpeed: 80,  // Slower typing speed
            backSpeed: 50,  // Slower backspacing speed
            backDelay: 2000, // Longer delay before backspacing
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        // Floating shapes animation - much slower
        const shapes = document.querySelectorAll('.floating-shape');
        shapes.forEach(shape => {
            let x = 0;
            let y = 0;
            let xSpeed = (Math.random() * 0.02) + 0.02; // Much slower
            let ySpeed = (Math.random() * 0.02) + 0.02; // Much slower
            
            function animate() {
                x += xSpeed;
                y += ySpeed;
                
                if (x > 15 || x < -15) xSpeed *= -1;
                if (y > 15 || y < -15) ySpeed *= -1;
                
                shape.style.transform = `translate(${x}px, ${y}px)`;
                requestAnimationFrame(animate);
            }
            
            animate();
        });

        // Slower hover animations for buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.style.transition = 'all 0.6s ease';
        });

        // Slower hover animations for navbar links
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.style.transition = 'all 0.5s ease';
        });

        // Slower skill tag animations
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.style.transition = 'all 0.5s ease';
        });

        // Slower service card animations
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.style.transition = 'all 0.8s ease';
        });

        // Slower form animations
        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach(control => {
            control.style.transition = 'all 0.5s ease';
        });

        // Smooth scroll with slower speed
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        duration: 2000 // Slower scroll
                    });
                }
            });
        });

        // Header background transition on scroll - slower
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(18, 18, 18, 0.98)';
                header.style.transition = 'background 1s ease';
            } else {
                header.style.background = 'rgba(18, 18, 18, 0.95)';
                header.style.transition = 'background 1s ease';
            }
        });

        // Slower blinking cursor animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0% { opacity: 1; }
                50% { opacity: 0; }
                100% { opacity: 1; }
            }
            .typed-cursor {
                animation: blink 1.2s infinite; // Slower blinking
            }
        `;
        document.head.appendChild(style);
    });

    // Additional slow animation for page load
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
