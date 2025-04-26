import getRandSequence from './randSeqenceGen.js';

//!!!This will be updated quite a bit once words are added.
// This sets up the button to generate a password when clicked
export const genPassword = (element, passwordField) => {
  element.addEventListener('click', () => {
    const randSequence = getRandSequence();
    passwordField.innerHTML = randSequence;
  });
};