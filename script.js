const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');reveal.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.feature,.step,.studio-copy,.studio-image,.statement-grid,.manifesto-inner,.social-proof,.final-cta').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});
