const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});




  const styleSwitcher = document.getElementById('style-switcher'),
        switcherToggle = document.getElementById('switcher-toggle'),
        switcherClose = document.getElementById('switcher-close');

  switcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.add('show-switcher');
  });

  switcherClose.addEventListener('click', () => {
    styleSwitcher.classList.remove('show-switcher');
  });


  const colors = document.querySelectorAll('.style-switcher-color');

  colors.forEach((color) => {
    color.onclick = () => {
        const activeColor = color.style.getPropertyValue('--hue');

        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color');

        document.documentElement.style.setProperty('--hue', activeColor);
    };
  });
let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
    input.addEventListener('change', () => {
        currentTheme = input.value; // <-- usa value, non ariaValueMax
        document.body.className = currentTheme;
    });
});





