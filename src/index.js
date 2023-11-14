import createDropDownMenu from './components/drop-down-menu/drop-down-menu.js';
import createMobileMenu from './components/mobile-menu/mobile-menu.js';
import createImageSlider from './components/image-slider/image-slider.js';
import './index.css';

const body = document.querySelector('body');
const dropDownDiv = document.createElement('div');

dropDownDiv.classList.add('drop-down');

body.appendChild(dropDownDiv);

dropDownDiv.appendChild(
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

dropDownDiv.appendChild(
  createDropDownMenu(
    'Another Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    [
      'https://www.google.com',
      'https://www.google.com',
      'https://www.google.com',
      'https://www.google.com',
    ]
  )
);

const mobileMenuDiv = document.createElement('div');
mobileMenuDiv.classList.add('mobile-menu');

body.appendChild(mobileMenuDiv);

mobileMenuDiv.appendChild(
  createMobileMenu(
    'Mobile Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    [
      'https://www.google.com',
      'https://www.google.com',
      'https://www.google.com',
      'https://www.google.com',
    ]
  )
);

createImageSlider();
