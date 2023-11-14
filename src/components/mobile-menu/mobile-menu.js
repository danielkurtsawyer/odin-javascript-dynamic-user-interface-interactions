import './mobile-menu.css';
import X from './x.svg';

// takes three parameters
// menuName - name to be displayed for the menu
// options - String array of option names
// links - String array of links, mapped to option names
export default (menuName, options, links) => {
  // create container to hold the menu
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.add('mobile-menu-container');

  // create header container to hold menu name and close menu icon
  const header = document.createElement('div');
  header.classList.add('mobile-menu-header');

  // create a div to hold the menu name
  const mobileMenuName = document.createElement('div');
  mobileMenuName.textContent = menuName;
  mobileMenuName.classList.add('mobile-menu-name');
  // add the menu name to the header
  header.appendChild(mobileMenuName);

  // create an image for the close icon
  const iconClose = new Image();
  iconClose.src = X;
  iconClose.classList.add('mobile-menu-close');
  // add the close icon to the header
  header.appendChild(iconClose);

  // add the header to the mobile menu container
  mobileMenu.appendChild(header);

  // now we can add each option below
  options.forEach((option, index) => {
    // create div to hold the option
    const optionDiv = document.createElement('div');
    // create a link
    const link = document.createElement('a');
    // set the text to the option in the option array
    link.textContent = option;
    // set the link href attribute to the corresponding link in the link array
    link.href = links[index];
    // append link to the option div
    optionDiv.appendChild(link);

    // add necessary classes
    optionDiv.classList.add('mobile-menu-option');

    // append the option to the dropdown menu
    mobileMenu.appendChild(optionDiv);
  });

  return mobileMenu;
};
