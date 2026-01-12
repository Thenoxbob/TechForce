console.log("JS chargé ✅");

// SLIDES
const slides = document.querySelectorAll('.slide, .page');
const members = document.querySelectorAll('.member');

const slideObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

slides.forEach(slide => slideObserver.observe(slide));

// TEAM – ANIMATION EN CASCADE
const teamObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      members.forEach((member, index) => {
        setTimeout(() => {
          member.classList.add('show');
        }, index * 150);
      });
    }
  });
}, { threshold: 0.4 });

const teamSection = document.querySelector('.team');
if (teamSection) teamObserver.observe(teamSection);
