// Smooth scrolling for navigation links
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

// Language toggle
document.querySelector('.lang-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    const html = document.documentElement;
    const currentLang = html.lang;
    
    if (currentLang === 'ar') {
        html.lang = 'fr';
        html.dir = 'ltr';
        this.textContent = 'AR';
        // You can add French translations here
    } else {
        html.lang = 'ar';
        html.dir = 'rtl';
        this.textContent = 'FR';
    }
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// WhatsApp button functionality
function openWhatsApp() {
    const phone = '212651935516';
    const message = 'مرحبا! أود الاستفسار عن خدماتكم';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
