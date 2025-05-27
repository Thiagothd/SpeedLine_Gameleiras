domReady(() => {
  // Initialize scroll buttons
  document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', () => {
      scrollToElement(button.dataset.scroll);
    });
  });

  // Set current year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});