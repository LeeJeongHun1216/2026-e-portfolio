const viewer = document.querySelector('#image-viewer');
const preview = viewer.querySelector('img');
const caption = viewer.querySelector('#viewer-caption');
let trigger;

for (const image of document.querySelectorAll('figure img')) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'zoom';
  button.setAttribute('aria-label', image.alt + ' 확대 보기');
  image.before(button);
  button.append(image);
  button.addEventListener('click', () => {
    trigger = button;
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt;
    caption.textContent = image.alt;
    viewer.showModal();
  });
}
viewer.addEventListener('close', () => trigger?.focus());
viewer.addEventListener('click', (event) => {
  if (event.target === viewer) viewer.close();
});

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.page:not(.cover)').forEach((section) => observer.observe(section));
}
