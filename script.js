var btn = document.querySelector('.hamburger');
var menu = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  console.log("clicked");
  menu.classList.toggle('main-nav');
  btn.classList.toggle('open');
})