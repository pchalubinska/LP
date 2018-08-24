const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.main-nav');
const menuItems = document.querySelectorAll('.nav__menu li');

btn.addEventListener('click', () => {
  menu.classList.toggle('main-nav__open');
  btn.classList.toggle('open');
});
for (let i=0; i< menuItems.length; i++) {
  menuItems[i].addEventListener('click', (menuItem) => {
    menu.classList.toggle('main-nav__open');
    btn.classList.toggle('open');
  });
}
