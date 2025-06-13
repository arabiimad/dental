document.addEventListener('DOMContentLoaded', () => {
    const fadeUpSections = document.querySelectorAll('.fade-in-section');

    if (!fadeUpSections.length) {
        return;
    }

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px', // margin around root. Values are similar to css property.
        threshold: 0.1 // visible amount of item shown in relation to root
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    fadeUpSections.forEach(section => {
        observer.observe(section);
    });
});
