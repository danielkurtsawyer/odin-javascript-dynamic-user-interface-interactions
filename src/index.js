import createDropDownMenu from './components/drop-down-menu/drop-down-menu.js';
import createMobileMenu from './components/mobile-menu/mobile-menu.js';
import createImageSlider from './components/image-slider/image-slider.js';

const body = document.querySelector('body');
body.appendChild(
  createDropDownMenu(
    'New Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    [
      'https://www.google.com',
      'https://www.google.com',
      'https://www.google.com',
      'https://www.google.com',
    ]
  )
);

createMobileMenu();
createImageSlider();
