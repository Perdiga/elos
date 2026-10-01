// ELOS — minimal interactions
const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".feature,.step,.studio-copy,.studio-image,.statement-grid,.manifesto-inner,.social-proof,.final-cta").forEach((el) => {
  el.classList.add("reveal");
  reveal.observe(el);
});
