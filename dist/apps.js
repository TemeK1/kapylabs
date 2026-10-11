// Add future apps here. Product previews are illustrative, not app screenshots.
const apps = [
  { id: 'rivi', name: 'RIVI', category: 'Reading app', description: 'A reading app with line highlighting, adjustable pacing, and tools to organise your books.', features: ['Line Lock', 'Bionic Reading', 'Library management'], detail: 'RIVI brings focus-oriented reading, line highlighting with Line Lock, Bionic Reading and a thoughtfully organised library together in one reading experience. Release details and app links will be added here when available.', icon: '<img src="assets/rivi-icon.png" alt="" width="57" height="57">', preview: '<div class="reader"><div class="demo-label"><span>RIVI</span><span>Aa</span></div><h4>A quiet moment</h4><p>The rain settled gently over the forest.<br>The world outside could wait a while.<span class="highlight">Here, there was only the next line.</span>And a little room to slow down.</p><div class="reader-bottom"><span>LINE LOCK ON</span><span>01 / 12</span></div></div>' },
];
document.getElementById('app-list').innerHTML = apps.map(app => `<article class="app" aria-labelledby="${app.id}-title"><div class="app-copy"><div class="app-heading"><div class="app-icon" aria-label="${app.name} app icon" role="img">${app.icon}</div><div><h3 id="${app.id}-title">${app.name}</h3><div class="app-category">${app.category}</div></div></div><p class="app-description">${app.description}</p><ul class="features">${app.features.map(feature => `<li>${feature}</li>`).join('')}</ul><a class="text-link" href="apps/${app.id}/">Learn more about ${app.name} <span aria-hidden="true">↗</span></a></div><div class="product-stage ${app.id}-stage" role="img" aria-label="Illustrative ${app.name} concept preview">${app.preview}<span class="preview-caption">CONCEPT PREVIEW</span></div></article>`).join('');
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

