'use strict';

/* Nav Drop */
document.addEventListener('click', navDropRemove);

function navDropRemove(event) {
  const index = event.target.dataset.index;
  const nav = document.querySelectorAll('.nav__drop');
  nav.forEach((navDrop) => {
    if (index === navDrop.dataset.type) {
      navDrop.classList.toggle('active');
    } else {
      navDrop.classList.remove('active');
    }
  });
}

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

/* Shoe 'arrow up' button when scrolling down */
const home = document.querySelector('.header');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
