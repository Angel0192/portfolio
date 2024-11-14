const currentUrl = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl) {
      link.classList.add('active');
    }
  });