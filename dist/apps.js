// Add future apps here.
const apps = [
  { id: 'rivi', name: 'RIVI', category: 'Reading app', description: 'Read your own books with Flow, Text Anchor or traditional ebook pages, plus tools to organise your library.', features: ['Three reading modes', 'Sentence highlighting', 'Library management'], detail: 'RIVI brings sentence-based guided reading in Flow and Text Anchor, manual ebook pages, comfortable typography and a thoughtfully organised library together in one reading experience. Release details and app links will be added here when available.', icon: '<img src="assets/rivi-icon.png?v=20261024-brand" alt="" width="57" height="57">', preview: '<video class="rivi-card-video" width="1080" height="730" autoplay muted loop playsinline preload="metadata" aria-label="Earlier RIVI development preview of anchored reading with word tracking enabled"><source src="assets/media/rivi-line-lock.mp4" type="video/mp4">Your browser does not support embedded video.</video>', previewCaption: 'TEXT ANCHOR · EARLIER PREVIEW' },
];
document.getElementById('app-list').innerHTML = apps.map(app => `<article class="app" aria-labelledby="${app.id}-title"><div class="app-copy"><div class="app-heading"><div class="app-icon" aria-label="${app.name} app icon" role="img">${app.icon}</div><div><h3 id="${app.id}-title">${app.name}</h3><div class="app-category">${app.category}</div></div></div><p class="app-description">${app.description}</p><ul class="features">${app.features.map(feature => `<li>${feature}</li>`).join('')}</ul><a class="text-link" href="apps/${app.id}/">Learn more about ${app.name} <span aria-hidden="true">↗</span></a></div><div class="product-stage ${app.id}-stage">${app.preview}<span class="preview-caption">${app.previewCaption ?? 'CONCEPT PREVIEW'}</span></div></article>`).join('');
const privacyDialog = document.getElementById('privacy-dialog');
// Start the fall when the trees are visible, including below the copy on mobile.
const forest = document.querySelector('.forest');
if (forest && 'IntersectionObserver' in window) {
  forest.classList.add('awaiting-view');
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      forest.classList.remove('awaiting-view');
      observer.disconnect();
    }
  }, { threshold: 0.35 });
  observer.observe(forest);
}
document.querySelector('[data-privacy]').addEventListener('click', () => privacyDialog.showModal());
document.querySelector('.close-dialog').addEventListener('click', () => privacyDialog.close());
privacyDialog.addEventListener('click', event => { if (event.target === privacyDialog) { const box = privacyDialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) privacyDialog.close(); } });

