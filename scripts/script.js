'use strict';

//  Toggle light/dark page mode
const toggleModeChk = document.getElementById('toggle-mode-checkbox');

// const toggleModeIcon = () => {
//   const toggleLabel = document.querySelector('.toggle-label');

//   toggleLabel.innerHTML.includes('black')
//     ? (toggleLabel.innerHTML = `<img src=\"/img/mode-icon-white.svg\" class=\"nav__mode-icon\">`)
//     : (toggleLabel.innerHTML = `<img src=\"/img/mode-icon-black.svg\" class=\"nav__mode-icon\">`);
// };

const toggleModeIcon = () => {
  const toggleLabel = document.querySelector('.toggle-label');

  toggleLabel.innerHTML.includes('black')
    ? (toggleLabel.innerHTML = `<img src=\"/img/mode-icon-white.svg\" class=\"nav__mode-icon\">`)
    : (toggleLabel.innerHTML = `<img src=\"/img/mode-icon-black.svg\" class=\"nav__mode-icon\">`);
};

toggleModeChk.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
  toggleModeIcon();
});

// Sticky navigation
window.onscroll = () => {
  shrinkHeader();
};

const shrinkHeader = () => {
  const header = document.querySelector('.header__container');

  document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
    ? header.classList.add('header-shrink')
    : header.classList.remove('header-shrink');
};

// Scroll to page section
const navLinks = document.querySelectorAll('.link-scroll');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    // To top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // To other sections
    if (href !== '#' && href.startsWith('#')) {
      const sectionStart = document.querySelector(href);
      sectionStart.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
