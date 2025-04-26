import './style.css';
import { genPassword } from './utils/genPassword.js';

// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector('#counter'));

document.querySelector('#app').innerHTML = `
  <div>
    <p>Your password is:</p>
    <div class='password-field'>
      <p id="passwordDisplay"></p>
    </div>
    <button id='genPassword'>Generate New Password</button>
  </div>
`;

// Grab button and password display
const genPasswordButton = document.querySelector('#genPassword');
const passwordDisplay = document.querySelector('#passwordDisplay');

// Hook up the event listener
genPassword(genPasswordButton, passwordDisplay);
