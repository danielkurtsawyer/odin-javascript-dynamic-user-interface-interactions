import './drop-down-menu.css';

export default (menuName, options, links) => {
  const dropDownMenu = document.createElement('div');
  dropDownMenu.classList.add('drop-down-menu-container');

  const menu = document.createElement('div');
  menu.classList.add('drop-down-menu-name');
  menu.textContent = menuName;

  dropDownMenu.appendChild(menu);

  options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    const link = document.createElement('a');
    link.textContent = option;
    link.href = links[index];
    optionDiv.appendChild(link);

    optionDiv.classList.add('drop-down-menu-option');
    optionDiv.classList.add('invisible');
    dropDownMenu.appendChild(optionDiv);
  });

  menu.addEventListener('click', () => {
    console.log('clicked');
    const optionsList = document.querySelectorAll('.drop-down-menu-option');
    const optionsArray = [...optionsList];
    optionsArray.forEach((option) => option.classList.toggle('invisible'));
  });

  return dropDownMenu;
};
