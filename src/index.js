import createDropDownMenu from './components/drop-down-menu/drop-down-menu.js';
import createMobileMenu from './components/mobile-menu/mobile-menu.js';
import createImageSlider from './components/image-slider/image-slider.js';
import './index.css';

import img1 from './img/bear.jpeg';
import img2 from './img/elephant.jpeg';
import img3 from './img/wolf.jpeg';

const body = document.querySelector('body');
const dropDownDiv = document.createElement('div');

dropDownDiv.classList.add('drop-down');

body.appendChild(dropDownDiv);

dropDownDiv.appendChild(
  createDropDownMenu(
    'New Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    ['#', '#', '#', '#']
  )
);

dropDownDiv.appendChild(
  createDropDownMenu(
    'Another Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    ['#', '#', '#', '#']
  )
);

const mobileMenuDiv = document.createElement('div');
mobileMenuDiv.classList.add('mobile-menu');

body.appendChild(mobileMenuDiv);

mobileMenuDiv.appendChild(
  createMobileMenu(
    'Mobile Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    ['#', '#', '#', '#']
  )
);

const imageSliderDiv = document.createElement('div');
imageSliderDiv.classList.add('image-slider');

body.appendChild(imageSliderDiv);
imageSliderDiv.appendChild(createImageSlider(img1, img2, img3));
