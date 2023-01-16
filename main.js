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

// Selector
const counters = document.querySelectorAll('.figures__item--figure');
// Main function
for (let n of counters) {
  const updateCount = () => {
    const target = +n.getAttribute('data-counter');
    const count = +n.innerText;
    const speed = 100; // animation speed
    const inc = target / speed;
    if (count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  };
  updateCount();
}

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
