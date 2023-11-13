import './drop-down-menu.css';

// takes three parameters
// menuName - name to be displayed for the menu
// options - String array of option names
// links - String array of links, mapped to option names
export default (menuName, options, links) => {
  // create the container for the entire drop down
  const dropDownMenu = document.createElement('div');
  dropDownMenu.classList.add('drop-down-menu-container');

  // create the first menu element - will be visible at all times
  const menu = document.createElement('div');
  menu.classList.add('drop-down-menu-name');
  menu.textContent = menuName;

  dropDownMenu.appendChild(menu);

  // create an empty array to hold the option divs
  const optionsArray = [];

  // make an option div for every option in the option array
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
    optionDiv.classList.add('drop-down-menu-option');
    optionDiv.classList.add('invisible');
    // add option div to the options Array, which will be used for adding event listeners

    optionsArray.push(optionDiv);
    // append the option to the dropdown menu
    dropDownMenu.appendChild(optionDiv);
  });

  // add event listener to trigger displaying/hiding the dropdown menu options
  menu.addEventListener('click', () => {
    console.log('clicked');
    optionsArray.forEach((option) => option.classList.toggle('invisible'));
  });

  return dropDownMenu;
};
