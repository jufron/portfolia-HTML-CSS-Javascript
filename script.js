
document.querySelector('.toggle').addEventListener('click', function () {
  const span = this.querySelectorAll('span');
  const subMenu = document.querySelector('nav .menu');

  span.forEach(el => {
    el.classList.toggle('button');
  });

  subMenu.classList.toggle('sub-menu');
});


const navbar = document.querySelector('nav');
const toggle_span = navbar.querySelectorAll('.toggle span');
const toTop = document.querySelector('.to-top');


window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    toggle_span.forEach(span => span.classList.add('white'));
    navbar.classList.add('stiky');
    toTop.classList.add('display-on');
  } else {
    toggle_span.forEach(span => span.classList.remove('white'));
    navbar.classList.remove('stiky');
    toTop.classList.remove('display-on');
  }
});
