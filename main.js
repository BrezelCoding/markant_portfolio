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
