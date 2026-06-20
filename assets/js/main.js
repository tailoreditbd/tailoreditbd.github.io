(function(){
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const navCollapse = document.getElementById('mainNav');

  function onScroll(){
    const y = window.scrollY + 140;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if(top <= y && bottom > y){
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(link.classList.contains('dropdown-toggle')){
        return;
      }

      if(navCollapse && navCollapse.classList.contains('show') && window.bootstrap){
        window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  const hero = document.querySelector('.hero');
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('[data-hero-dot]');
  const heroPrev = document.querySelector('[data-hero-prev]');
  const heroNext = document.querySelector('[data-hero-next]');
  let heroIndex = 0;
  let heroTimer;

  function showHeroSlide(index){
    if(!heroSlides.length) return;

    heroIndex = (index + heroSlides.length) % heroSlides.length;

    heroSlides.forEach((slide, i) => {
      const active = i === heroIndex;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    if(hero){
      hero.classList.toggle('hero-bg-slide-1', heroIndex === 0);
    }

    heroDots.forEach((dot, i) => {
      const active = i === heroIndex;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function restartHeroTimer(){
    if(heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), 6000);
  }

  if(heroSlides.length){
    heroDots.forEach(dot => {
      dot.addEventListener('click', () => {
        showHeroSlide(Number(dot.dataset.heroDot));
        restartHeroTimer();
      });
    });

    if(heroPrev){
      heroPrev.addEventListener('click', () => {
        showHeroSlide(heroIndex - 1);
        restartHeroTimer();
      });
    }

    if(heroNext){
      heroNext.addEventListener('click', () => {
        showHeroSlide(heroIndex + 1);
        restartHeroTimer();
      });
    }

    restartHeroTimer();
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      const required = form.querySelectorAll('[required]');
      let valid = true;

      required.forEach(field => {
        const empty = !field.value.trim();
        field.classList.toggle('is-invalid', empty);
        if(empty) valid = false;
      });

      if(!valid){
        msg.className = 'alert alert-warning';
        msg.textContent = 'Please complete the required fields before sending.';
        return;
      }

      msg.className = 'alert alert-success';
      msg.textContent = 'Thank you. The Tailored IT BD team will get back to you within 24 hours.';
      form.reset();
    });
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();
