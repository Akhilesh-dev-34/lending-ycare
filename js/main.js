// Mobile nav
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 72,
      behavior: 'smooth'
    });
  });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});


let currentTestimonial = 0;
const quoteEl = document.getElementById('testimonialQuote');
const authorEl = document.getElementById('testimonialAuthor');
const dots = document.querySelectorAll('.carousel-dot');

function showTestimonial(index) {
  if (!quoteEl || !authorEl) return;
  currentTestimonial = index;
  quoteEl.textContent = testimonials[index].quote;
  authorEl.innerHTML = testimonials[index].author;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

dots.forEach(dot => {
  dot.addEventListener('click', () => showTestimonial(Number(dot.dataset.index)));
});

if (quoteEl) {
  setInterval(() => showTestimonial((currentTestimonial + 1) % testimonials.length), 6000);
}

// Waitlist form
const form = document.getElementById('waitlistForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    formSuccess.style.display = 'block';
  });
}

// Founder video placeholder
const founderVideo = document.getElementById('founderVideo');
if (founderVideo) {
  founderVideo.addEventListener('click', () => {
    alert('Founder story video coming soon!');
  });
}
