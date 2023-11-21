import './image-slider.css';
import Left from './chevron-left.svg';
import Right from './chevron-right.svg';

const updateVisibility = function updateArrowVisbility(
  newPictureIndex,
  numPictures,
  leftArrow,
  rightArrow
) {
  if (
    newPictureIndex === 0 &&
    !leftArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    leftArrow.classList.add('image-slider-arrow-invisible');
  } else if (
    newPictureIndex > 0 &&
    leftArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    leftArrow.classList.remove('image-slider-arrow-invisible');
  }

  if (
    newPictureIndex === numPictures - 1 &&
    !rightArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    rightArrow.classList.add('image-slider-arrow-invisible');
  } else if (
    newPictureIndex < numPictures &&
    rightArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    rightArrow.classList.remove('image-slider-arrow-invisible');
  }
};

const changeFrame = function changeFrameImage(
  allImagesDiv,
  newPictureIndex,
  numPictures
) {
  if (newPictureIndex >= 0 && newPictureIndex < numPictures) {
    // change transform property
    allImagesDiv.setAttribute(
      'style',
      `transform: translate(-${newPictureIndex * 100}%)`
    );

    const leftArrow = document.querySelector('.image-slider-left-arrow');
    const rightArrow = document.querySelector('.image-slider-right-arrow');

    // update arrows image-slider-index attribute
    leftArrow.setAttribute('image-slider-index', newPictureIndex - 1);
    rightArrow.setAttribute('image-slider-index', newPictureIndex + 1);

    // also update visibility class if no other image in range
    setTimeout(
      () =>
        updateVisibility(newPictureIndex, numPictures, leftArrow, rightArrow),
      250
    );
  }

  console.log('clicked!');
};

export default function initializeImageSlider(...pictures) {
  // create a container to hold the image slider elements
  const imageSlider = document.createElement('div');
  imageSlider.classList.add('image-slider-container');

  // create the left arrow
  const leftArrow = new Image();
  leftArrow.src = Left;
  leftArrow.classList.add('image-slider-left-arrow');
  leftArrow.setAttribute('image-slider-index', -1);
  // initially, there is no image to the left so add the invisible class
  leftArrow.classList.add('image-slider-arrow-invisible');

  imageSlider.appendChild(leftArrow);

  // create the frame to hold the images
  const frame = document.createElement('div');
  frame.classList.add('image-slider-frame');

  imageSlider.appendChild(frame);

  // create a div to hold all of the images in a long grid
  const allImagesDiv = document.createElement('div');
  allImagesDiv.classList.add('image-slider-images');

  // add every picture to the div
  pictures.forEach((picture) => {
    const img = new Image();
    img.src = picture;
    img.classList.add('image-slider-img');
    allImagesDiv.appendChild(img);
  });

  // add to the frame
  // the CSS formats the image div width to cover exactly one image within the frame
  frame.appendChild(allImagesDiv);

  // create the right arrow
  const rightArrow = new Image();
  rightArrow.src = Right;
  rightArrow.classList.add('image-slider-right-arrow');
  rightArrow.setAttribute('image-slider-index', 1);

  // add event listeners for user interactivity

  leftArrow.addEventListener('click', (e) =>
    changeFrame(
      allImagesDiv,
      +e.target.getAttribute('image-slider-index'),
      pictures.length
    )
  );

  rightArrow.addEventListener('click', (e) =>
    changeFrame(
      allImagesDiv,
      +e.target.getAttribute('image-slider-index'),
      pictures.length
    )
  );

  imageSlider.appendChild(rightArrow);

  // next, create the navigation dots at the bottom
  const navDotContainer = document.createElement('div');
  navDotContainer.classList.add('image-slider-nav-dot-container');

  pictures.forEach((picture, index) => {
    console.log(index);
    const navDot = document.createElement('div');
    navDot.classList.add('image-slider-nav-dot');
    navDot.setAttribute('image-slider-index', index);
    navDot.addEventListener('click', () =>
      changeFrame(allImagesDiv, index, pictures.length)
    );
    navDotContainer.appendChild(navDot);
  });

  imageSlider.appendChild(navDotContainer);

  return imageSlider;
}
