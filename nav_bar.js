const links = document.querySelectorAll('.nav-link');

if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      links.forEach((link) => {
        link.classList.remove('active');
      });
      link.classList.add('active');
      const href = link.getAttribute('href');
      window.location = href;
    });

    // check if the link URL matches the current URL and add the active class
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}