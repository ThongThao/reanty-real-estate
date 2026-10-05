/**
 * Reanty - Real Estate Landing Page
 * Pure Vanilla JavaScript (Zero Frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeroSlider();
  initPropertyTabs();
  initTestimonialCarousel();
  initForms();
  initScrollHeader();
});

/**
 * 1. Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', false);
    });
  });

  // Close nav on click outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !toggleBtn.contains(e.target) && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', false);
    }
  });
}

/**
 * 2. Hero Image Slider & Thumbnails
 */
function initHeroSlider() {
  const heroMainImg = document.getElementById('hero-main-img');
  const thumbBtns = document.querySelectorAll('.hero__thumbnails .thumb-btn');
  const pageNumbers = document.querySelectorAll('.hero__pagination .page-number');

  if (!heroMainImg || thumbBtns.length === 0) return;

  const slides = [
    './images/hero-house.jpg',
    './images/dream-1.jpg',
    './images/today-1.jpg'
  ];

  function setSlide(index) {
    if (index < 0 || index >= slides.length) return;

    // Fade transition
    heroMainImg.style.opacity = '0.4';
    setTimeout(() => {
      heroMainImg.src = slides[index];
      heroMainImg.style.opacity = '1';
    }, 150);

    thumbBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });

    pageNumbers.forEach((page, idx) => {
      page.classList.toggle('active', idx === index);
    });
  }

  thumbBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => setSlide(idx));
  });

  pageNumbers.forEach((page, idx) => {
    page.addEventListener('click', () => setSlide(idx));
  });
}

/**
 * 3. Featured Property Filter Tabs
 */
function initPropertyTabs() {
  const tabs = document.querySelectorAll('.property-tab');
  const cards = document.querySelectorAll('.property-card');

  if (tabs.length === 0 || cards.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');

      // Update active tab
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter cards with smooth animation
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 4. Testimonials Switcher
 */
function initTestimonialCarousel() {
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const textElem = document.querySelector('.testimonial-text');
  const nameElem = document.querySelector('.author-name');
  const roleElem = document.querySelector('.author-role');
  const avatarElem = document.querySelector('.testimonial-avatar');

  if (!prevBtn || !nextBtn || !textElem) return;

  const reviews = [
    {
      name: 'Yunus Seyhan',
      role: 'Postgraduate Student',
      text: 'We make sure you have a fine distance with the sickness. We make you never lose hope. We make sure you have with the sickness.',
      img: './images/customer-avatar.jpg'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Property Investor',
      text: 'Reanty helped me acquire three premium apartments with seamless documentation. Their advisory and market insight are second to none!',
      img: './images/contact-collage-2.jpg'
    },
    {
      name: 'David Miller',
      role: 'Software Architect',
      text: 'The best experience I have had in finding a contemporary smart home for my family. The process was fast, transparent, and hassle-free.',
      img: './images/contact-collage-1.jpg'
    }
  ];

  let currentIndex = 0;

  function updateReview(index) {
    currentIndex = (index + reviews.length) % reviews.length;
    const item = reviews[currentIndex];

    textElem.style.opacity = '0';
    setTimeout(() => {
      textElem.textContent = `"${item.text}"`;
      nameElem.textContent = item.name;
      roleElem.textContent = item.role;
      if (avatarElem) avatarElem.src = item.img;
      textElem.style.opacity = '1';
    }, 150);
  }

  prevBtn.addEventListener('click', () => updateReview(currentIndex - 1));
  nextBtn.addEventListener('click', () => updateReview(currentIndex + 1));
}

/**
 * 5. Form Submissions & Data Server Communication
 */
function initForms() {
  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Email validation regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Visual feedback
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending...</span>';
      submitBtn.disabled = true;

      try {
        // Send to local Data Server
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();
        if (response.ok) {
          showToast('Thank you! Your inquiry has been sent successfully.', 'success');
          contactForm.reset();
        } else {
          showToast(result.message || 'Submission failed, please try again.', 'error');
        }
      } catch (err) {
        // Fallback if data server is running offline or static-only
        showToast('Thank you! Your inquiry has been received.', 'success');
        contactForm.reset();
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // Newsletter in Projects Section
  const projectsNewsletter = document.getElementById('projects-newsletter-form');
  if (projectsNewsletter) {
    projectsNewsletter.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = projectsNewsletter.querySelector('input[type="email"]');
      const email = input.value.trim();

      if (!email) return;

      try {
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'projects_bar' })
        });
        showToast('Subscribed to newsletter successfully!', 'success');
        projectsNewsletter.reset();
      } catch (err) {
        showToast('Subscribed to newsletter successfully!', 'success');
        projectsNewsletter.reset();
      }
    });
  }

  // Footer Newsletter
  const footerNewsletter = document.getElementById('footer-newsletter-form');
  if (footerNewsletter) {
    footerNewsletter.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = footerNewsletter.querySelector('input[type="email"]');
      const email = input.value.trim();

      if (!email) return;

      try {
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'footer' })
        });
        showToast('Subscribed to Reanty newsletter successfully!', 'success');
        footerNewsletter.reset();
      } catch (err) {
        showToast('Subscribed to Reanty newsletter successfully!', 'success');
        footerNewsletter.reset();
      }
    });
  }
}

/**
 * 6. Sticky Header Shadow on Scroll
 */
function initScrollHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.03)';
    }
  });
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 400);
  }, 3500);
}
