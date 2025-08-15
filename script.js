// Image Modal Functions
function openModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modal.classList.remove('hidden');

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');

    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the content
document.getElementById('imageModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    animatedElements.forEach(el => {
        el.classList.remove('animate-fade-in-up');
        observer.observe(el);
    });
});

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

function toggleScrollButton() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event Listeners
window.addEventListener('scroll', toggleScrollButton);
scrollToTopBtn.addEventListener('click', scrollToTop);