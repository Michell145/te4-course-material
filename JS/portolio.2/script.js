const nav = document.querySelector('nav');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', window.scrollY > 100);
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  const newTheme = isDark ? 'light-mode' : 'dark-mode';

  body.classList.remove('dark-mode', 'light-mode');
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
});

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with HTML, CSS, and JavaScript.',
    image: './assets/nice.png',
    demoLink: '#Hire',
    codeLink: 'https://github.com/Michellissa/portfolio-prototyp',
  },
  {
    title: 'Car Website',
    description:
      'High-tech car showcase site with animations and modern design.',
    image: './assets/car.png',
    demoLink: '#Hire',
    codeLink: 'https://github.com/Michellissa/bil-hemsida',
  },
  {
    title: 'Inventory App',
    description: 'Inventory management tool built with JavaScript and JSON.',
    image: './assets/lager.png',
    demoLink: '#Hire',
    codeLink: 'https://github.com/Michellissa/Michells-lager',
  },
];

const projectSection = document.getElementById('Projects');

projects.forEach(project => {
  const figure = document.createElement('figure');
  figure.classList.add('Project-item');

  figure.innerHTML = `
    <img src="${project.image}" alt="${project.title} preview">
    <figcaption>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a class="menu" href="${project.demoLink}">Learn More</a>
      <a class="menu" href="${project.codeLink}" target="_blank">View the code</a>
    </figcaption>
  `;

  projectSection.appendChild(figure);
});
const messageBox = document.getElementById('form-message');
const conctactForm = document.getElementById('contact-form');
conctactForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = conctactForm.name.value.trim();
  const email = conctactForm.email.value.trim();
  const message = conctactForm.message.value.trim();

  if (name.lenght < 2) {
    alert('please eneter a valid name');
    return;
  }
  const emailpattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailpattern.test(email)) {
    alert('please eneter a valid email');
    return;
  }
  if (message.lenght < 10) {
    alert('please eneter a valid message');
    return;
  }

  alert('✅Thank you for your message! I will get back to you soon.');
  messageBox.textContent = '✅ Message sent successfully!';
  messageBox.style.color = 'var(--accent)';
  setTimeout(() => {
    messageBox.textContent = '';
  }, 3000);
  conctactForm.reset();
});

const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};
const displayScrollElement = el => {
  el.classList.add('active');
};

const hideScrollElement = el => {
  el.classList.remove('active');
};
const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};
window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
window.addEventListener('load', () => {
  handleScrollAnimation();
});
handleScrollAnimation();

const themeSelect = document.getElementById('color-theme');

const savedtheme = localStorage.getItem('color-theme');
if (savedtheme) {
  document.body.classList.add('${savedtheme}-theme');
  themeSelect.value = savedtheme;
}
themeSelect.addEventListener('change', () => {
  document.body.classList.remove(
    'default-theme',
    'purple-theme',
    'green-theme',
    'red-theme'
  );
  const selected = themeSelect.value;
  if (selected !== 'default') {
    document.body.classList.add(`${selected}-theme`);
  }
  localStorage.setItem('color-theme', selected);
});

const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');

const textArray = [
  'Web Developer 💻',
  'Creative Coder 🎨',
  'Tech Enthusiast 🚀',
  'Problem Solver 🧠',
];
let textArrayIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newTextDelay = 2000;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (textArray.length) setTimeout(type, 1000);
});
