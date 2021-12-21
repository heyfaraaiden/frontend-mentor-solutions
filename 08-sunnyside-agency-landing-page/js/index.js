// CHANGING BG COLOR OF THE HEADER
const header = document.querySelector('.header');

const changeBgColor = (color) => {
  header.style.backgroundColor = color;
};

const changeBoxShadow = (shadow) => {
  header.style.boxShadow = shadow;
};

window.onscroll = () => {
  let top = window.scrollY;

  if (top <= 60) {
    changeBgColor('transparent');
    changeBoxShadow('none');
  } else {
    changeBgColor('hsl(51, 100%, 49%)');
    changeBoxShadow('0 2px 20px rgba(0,0,0,.2)');
  }

  if (top > 622) {
    changeBgColor('hsl(7, 99%, 70%)');
  }

  if (top > 1203) {
    changeBgColor('hsl(168, 34%, 41%)');
  }

  if (top > 2011) {
    changeBgColor('hsl(192, 81%, 47%');
  }

  if (top > 3500) {
    changeBgColor('hsl(167, 40%, 24%)');
  }
};


// BURGER MENU INTERACTION
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

const openMenu = (e) => {
  e.stopPropagation();
  burgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
}

burgerMenu.addEventListener('click', (e) => {
  openMenu(e);
});


// OPEN BURGER MENU WITH KEYBOARD - A11Y
burgerMenu.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) { // 13 refers to keyCode of "Enter"
    openMenu(e);
  }
});


// ARROW DOWN INTERACTION - GO TO SERVICES SECTION
const hero = document.querySelector('.hero');
const arrowDown  = document.querySelector('.arrow-down');
const headerHeight = 60;

arrowDown.addEventListener('click', () => {
  window.scroll(0, hero.clientHeight - headerHeight);
});