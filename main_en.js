'use strict';

document.addEventListener('click', (event) => {
  const navDrop = document.querySelectorAll('.nav__drop');
  const mobileDrop = document.querySelector('.mobile__drop');
  const navLink2 = document.querySelectorAll('.nav__link2');

  if (event.target.dataset.index) {
    const index = event.target.dataset.index;
    navDrop.forEach((link) => {
      if (index === link.dataset.type) {
        link.classList.toggle('active');
      } else {
        link.classList.remove('active');
      }
    });
  } else if (event.target.dataset.mindex) {
    const mIndex = event.target.dataset.mindex;
    if (mIndex === mobileDrop.dataset.mtype) {
      mobileDrop.classList.remove('invisible');
    } else {
      mobileDrop.classList.add('invisible');
    }
  } else if (event.target.dataset.mtype) {
    const mType = event.target.dataset.mtype;
    navLink2.forEach((link) => {
      if (mType === link.dataset.drop) {
        console.log('aa');
        link.classList.toggle('active');
      } else {
        link.classList.remove('active');
      }
    });
  } else {
    navDrop.forEach((nav) => {
      nav.classList.remove('active');
    });
    mobileDrop.classList.add('invisible');
  }
});

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
