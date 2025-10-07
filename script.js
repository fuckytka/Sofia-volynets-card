const shareBtn = document.querySelector('.share-btn');
const shareMenu = document.getElementById('shareMenu');

shareBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  shareMenu.classList.toggle('hidden');
});

document.addEventListener('click', () => {
  shareMenu.classList.add('hidden');
});
