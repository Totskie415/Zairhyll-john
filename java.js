document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, h3[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateNav() {
    let scrollPos = window.scrollY + 200;
    sections.forEach(section => {
      if (section.id && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateNav);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".work-animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(el => observer.observe(el));
});




let nextEdu = document.querySelector('.next-educ');
let prevEdu = document.querySelector('.prev-educ');

nextEdu.addEventListener('click', function() {
  let items = document.querySelectorAll('.item-educ');
  document.querySelector('.slide-educ').appendChild(items[0]);
});

prevEdu.addEventListener('click', function() {
  let items = document.querySelectorAll('.item-educ');
  document.querySelector('.slide-educ').prepend(items[items.length - 1]);
});