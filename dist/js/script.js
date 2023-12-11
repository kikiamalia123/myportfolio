// navbar fixed
window.onscroll= function() {
  const header = document.querySelector('header');

  if(window.pageYOffset > header.offsetTop) {
      header.classList.add('navbar-fixed');
  } else {
      header.classList.remove('navbar-fixed')
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

// COBAAAAA -> temukan id:hehe & id:huhu
const openKuy = (id) => {
  let modal = document.getElementById(id);
  modal.classList.remove("hidden");
};
const closeKuy = (id) => {
  let modal = document.getElementById(id);
  modal.classList.add("hidden");
};

