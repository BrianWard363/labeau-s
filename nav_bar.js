const navbarLinks = document.querySelectorAll('#navbar .nav-link');

if (navbarLinks.length) {
  navbarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navbarLinks.forEach((link) => {
        link.classList.remove('active');
      });
      link.classList.add('active');
      const href = link.getAttribute('href');
      window.location = href;
    });

    // check if the link URL matches the current URL or if the current URL ends with a forward slash and the link has an href of "/"
    if (link.href === window.location.href || (window.location.pathname === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });
}
