
// DOM Elements
const rsvpModal = document.getElementById('rsvpModal');
const mainContent = document.getElementById('mainContent');
const rsvpForm = document.getElementById('rsvpForm');
const countdownElements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

// Event date - May 28, 2025, 07:00 WIB
const eventDate = new Date('2025-05-28T07:00:00+07:00').getTime();

// RSVP Form Handler
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    
    if (name && attendance) {
        // Store RSVP data (you can save to localStorage or send to server)
        localStorage.setItem('rsvpData', JSON.stringify({
            name: name,
            attendance: attendance,
            timestamp: new Date().toISOString()
        }));
        
        // Hide modal and show main content
        rsvpModal.classList.remove('active');
        setTimeout(() => {
            rsvpModal.classList.add('hidden');
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.classList.add('visible');
                startCountdown();
                addScrollAnimations();
            }, 100);
        }, 300);
    }
});

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance < 0) {
        // Event has passed
        countdownElements.days.textContent = '00';
        countdownElements.hours.textContent = '00';
        countdownElements.minutes.textContent = '00';
        countdownElements.seconds.textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownElements.days.textContent = String(days).padStart(2, '0');
    countdownElements.hours.textContent = String(hours).padStart(2, '0');
    countdownElements.minutes.textContent = String(minutes).padStart(2, '0');
    countdownElements.seconds.textContent = String(seconds).padStart(2, '0');
}

function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Google Maps Function
function openGoogleMaps() {
    const address = 'Jl. Siaga 1 Gg. swadaya 3 Kemayoran Gempol Jakarta Indonesia 10630';
    const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
}

// Scroll Animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.info-card, .rundown-item, .gallery-item, .contact-item, .map-card'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for internal links
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already filled RSVP
    const rsvpData = localStorage.getItem('rsvpData');
    if (rsvpData) {
        // Skip RSVP modal if already filled
        rsvpModal.classList.remove('active');
        rsvpModal.classList.add('hidden');
        mainContent.classList.remove('hidden');
        setTimeout(() => {
            mainContent.classList.add('visible');
            startCountdown();
            addScrollAnimations();
        }, 100);
    }
    
    // Add smooth scrolling to any internal links
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
});

// Add loading animation to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Add hover effects to cards
document.querySelectorAll('.info-card, .contact-item, .gallery-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Console log for debugging
console.log('P5 SMKN 21 Jakarta - Invitation Website Loaded');
console.log('Event Date:', new Date(eventDate));
