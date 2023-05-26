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

const submit_form = (event) => {
  event.preventDefault();
  const form = event.target.closest('form');
  const formData = new FormData(form);
  if (formData.get('honeypot')) return;
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    honeypot: formData.get('honeypot'),
    accessKey: formData.get('accessKey'),
    message: formData.get('message')
  }
  fetch(form.action, {
    method: form.method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  .then(res => {
    if (res.status === 200) {
      form.reset();
      const toast = document.querySelector('.contact-success')
      toast?.classList.add('reveal');
      toast?.addEventListener('animationend', (event) => {
        if (event.animationName === 'hide-success-toast') {
          toast.remove()
        }
        setTimeout(() => {
          toast.classList.add('destroy');
        }, 3500);
      })
    }
  })
  .catch(err => {
    console.error(err);
  })
}

document.querySelector('#contact-form')?.addEventListener('submit', submit_form);
