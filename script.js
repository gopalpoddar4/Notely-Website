/* script.js for Notely site */

/* Wait for DOM */
document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 70; // header offset
        window.scrollTo({ top, behavior: 'smooth' });
        // close mobile nav if open
        if (navList.classList.contains('show')) navList.classList.remove('show');
      }
    });
  });

  // Download button behavior
  const downloadLink = document.getElementById('downloadLink');
  if (downloadLink) {
    downloadLink.addEventListener('click', function(e) {
      // this opens in new tab by default (target=_blank)
      // data-download attribute holds actual APK url (if you set)
      const apk = this.getAttribute('data-download');
      if (apk && apk !== this.href) {
        // if you want to force APK download open, uncomment below:
        // window.open(apk, '_blank', 'noopener');
      }
      // nothing else required here, link opens.
    });
  }

  // Screenshot modal preview
  const modal = document.getElementById('modal');
  const modalImage = document.querySelector('.modal-image');
  const modalClose = document.querySelector('.modal-close');

  document.querySelectorAll('.screenshot').forEach(img => {
    img.addEventListener('click', function() {
      const src = this.getAttribute('src');
      modalImage.setAttribute('src', src);
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      // prevent body scroll
      document.body.style.overflow = 'hidden';
    });

    // keyboard accessibility: open on Enter
    img.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.setAttribute('src', '');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
});

