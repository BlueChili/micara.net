var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

const carouselObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('zoom');
    } else {
      entry.target.classList.remove('zoom');
    }
  })
});

const homepageCarouselSlides = document.querySelectorAll('#homepagecarousel .carousel-item');

homepageCarouselSlides.forEach((slide) => carouselObserver.observe(slide));
