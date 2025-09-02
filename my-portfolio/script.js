const toggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const links = navLinks.querySelectorAll('a');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Stänger menyn när man klickar på en länk
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
