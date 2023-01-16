'use strict';

const nav0 = document.querySelector('.nav__drop.nav0');
const nav1 = document.querySelector('.nav__drop.nav1');
const nav2 = document.querySelector('.nav__drop.nav2');

// Navbar : Our Services
document.querySelector('.nav__linktext.nav0').addEventListener('click', () => {
  nav0.classList.toggle('active');
  nav1.classList.remove('active');
  nav2.classList.remove('active');
});

// Navbar : Markant for..
document.querySelector('.nav__linktext.nav1').addEventListener('click', () => {
  nav1.classList.toggle('active');
  nav0.classList.remove('active');
  nav2.classList.remove('active');
});

// Navbar : About Us
document.querySelector('.nav__linktext.nav2').addEventListener('click', () => {
  nav2.classList.toggle('active');
  nav0.classList.remove('active');
  nav1.classList.remove('active');
});

// document.addEventListener('click', () => {
//   document.querySelector('.nav__drop__box').classList.add('hidden');
// });
