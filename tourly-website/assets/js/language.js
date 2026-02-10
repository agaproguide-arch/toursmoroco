const switcher = document.getElementById('language-switcher');

switcher.addEventListener('change', () => {
  const lang = switcher.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    if(el.dataset[lang]) el.innerText = el.dataset[lang];
  });
});