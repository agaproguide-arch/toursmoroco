const darkToggle = document.getElementById('dark-mode-toggle');
darkToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkToggle.checked);
});