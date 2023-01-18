'use strict';

/* Nav Drop */
const nav = Array.from(document.querySelectorAll('.nav__linktext'));

nav.forEach((link) => {
  link.addEventListener('click', (event) => {
    const index = event.target.dataset.index;
    const navDrop = document.querySelectorAll('.nav__drop');
    navDrop.forEach((linkDrop) => {
      if (index === linkDrop.dataset.type) {
        linkDrop.classList.toggle('active');
      } else {
        linkDrop.classList.remove('active');
      }
    });
  });
});

/* Nav Drop - Mobile */
const toggleBtn = document.querySelector('.toggle__btn');
const mobileDrop = document.querySelector('.mobile__drop');

toggleBtn.addEventListener('click', () => {
  mobileDrop.classList.toggle('invisible');
});

const mobileNavLink = Array.from(
  document.querySelectorAll('.mobile__nav__link')
);

mobileNavLink.forEach((link) =>
  link.addEventListener('click', (event) => {
    const mType = event.target.dataset.mtype;
    const drop = document.querySelectorAll('.nav__link2');
    drop.forEach((linkDrop) => {
      if (mType === linkDrop.dataset.drop) {
        linkDrop.classList.toggle('active');
        mobileDrop.classList.remove('invisible');
      } else {
        linkDrop.classList.remove('active');
      }
    });
  })
);

/* Counter */
const counterElements = document.querySelectorAll('.figures__item--figure');
const speed = 50; // the lower the slower

function counter(target, start, stop) {
  target.innerText = 0.1;
  const counterInterval = setInterval(() => {
    const inc = Number(stop / speed);
    start += inc;
    const valueConverted = (Math.round(start * 100) / 100).toFixed(0);
    target.innerText = valueConverted;
    if (valueConverted == stop) {
      clearInterval(counterInterval);
    }
  }, 30);
}

function obCallBack(entries) {
  entries.forEach((entry) => {
    const { target } = entry;
    const stopValue = target.innerText;
    const startValue = 0;
    if (!entry.isIntersecting) return;
    counter(target, startValue, stopValue);
    counterObserver.unobserve(target);
  });
}

const counterObserver = new IntersectionObserver(obCallBack, { threshold: 1 });
counterElements.forEach((counterElem) => counterObserver.observe(counterElem));

/* Show 'arrow up' button when scrolling down */
const home = document.querySelector('.header__container');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

/* Handle click on the 'arrow up' button */
arrowUp.addEventListener('click', () => {
  scrollIntoView('.content');
});

function scrollIntoView(seclector) {
  const scrollTo = document.querySelector(seclector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
