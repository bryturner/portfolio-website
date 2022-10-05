// 'use strict';

// // Sticky navigation
// window.onscroll = () => {
//   shrinkHeader();
// };

// const shrinkHeader = () => {
//   const header = document.querySelector('.header__container');

//   document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
//     ? header.classList.add('header-shrink')
//     : header.classList.remove('header-shrink');
// };

// // Scroll to page section
// const navLinks = document.querySelectorAll('.link-scroll');

// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     // To top
//     if (href === '#')
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });

//     // To other sections
//     if (href !== '#' && href.startsWith('#')) {
//       const sectionStart = document.querySelector(href);
//       sectionStart.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

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
    setTimeout(() => {
      aboutText.innerHTML =
        aboutTexts.querySelector(`[data-length=most]`).innerHTML;
      aboutOptions.querySelector('#length-most').checked = true;
    }, 3000);
  }
});

const skillTexts = document
  .querySelector('#skill__texts')
  .content.cloneNode(!0);
const skillText = document.querySelector('.skill__text');
const skillOptions = document.querySelector('.skill__selection');

skillOptions.addEventListener('change', e => {
  const targetText = skillTexts.querySelector(`[data-title=${e.target.value}]`);

  skillText.innerHTML = targetText.innerHTML;
});
