'use strict';

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

// Menu button animation
const menuBtn = document.querySelector('.menu__btn');
const headerId = document.getElementById('header');

menuBtn.addEventListener('click', () => {
  const menuBtnLines = document.querySelectorAll('.menu__btn-line');
  menuBtnLines.forEach(line => line.classList.toggle('close'));
  headerId.classList.toggle('show');
  document.body.classList.toggle('show');
});

// Scroll to page section
const navLinks = document.querySelectorAll('.link-scroll');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (window.innerWidth <= 740) {
      document.body.classList.remove('show');
      headerId.classList.remove('show');
    }
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

// Select about text templates
const aboutTexts = document
  .querySelector('#about__texts')
  .content.cloneNode(!0);
const aboutText = document.querySelector('.about__text');
const aboutOptions = document.querySelector('.about__length-options');

aboutOptions.addEventListener('change', e => {
  const targetText = aboutTexts.querySelector(
    `[data-length=${e.target.value}]`
  );
  aboutText.innerHTML = targetText.innerHTML;

  if (e.target.value === 'least') {
    const aboutInputs = document.querySelectorAll('.about__input');
    aboutInputs.forEach(input => (input.disabled = true));

    setTimeout(() => {
      aboutText.innerHTML =
        aboutTexts.querySelector(`[data-length=most]`).innerHTML;
      aboutOptions.querySelector('#length-most').checked = true;
      aboutInputs.forEach(input => (input.disabled = false));
    }, 2000);
  }
});

// Intersection animations
const skillsIcons = document.querySelectorAll('.skills__icon');
const observeEls = document.querySelectorAll('.observe');
const radios = document.querySelectorAll('.about__option');

const skillsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.remove('trans-scale-5');
      }
    });
  },
  { threshold: 1 }
);

const defaultObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.remove('transY-30');
        entry.target.classList.remove('transY-80');
        entry.target.classList.remove('trans-scale-0');
      }
    });
  },
  { threshold: 0.25 }
);

const radioObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.remove('trans-scale-2');
      }
    });
  },
  { threshold: 1 }
);

skillsIcons.forEach(icon => {
  skillsObserver.observe(icon);
});

observeEls.forEach(el => {
  defaultObserver.observe(el);
});

radios.forEach(radio => {
  radioObserver.observe(radio);
});
