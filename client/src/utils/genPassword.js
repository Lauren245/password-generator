import getWords from '../api/wordApi.js';
import getRandSequence from './randSeqenceGen.js';

//!!!This will be updated quite a bit once words are added.
// This sets up the button to generate a password when clicked
// export const genPassword = (element, passwordField) => {
//   element.addEventListener('click', () => {
//     const randSequence = getRandSequence();
//     passwordField.innerHTML = randSequence;
//   });
// };

export const genPassword = (element, passwordField) => {
  element.addEventListener('click', async() => {
    const data = await getWords();
    console.log('data = ', data);
    const randSequence = getRandSequence();
    passwordField.innerHTML = data+randSequence;
  });
};