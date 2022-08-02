// Import stylesheets
import './style.css';

// Write Javascript code!
console.log('Hello frineds');

const syncWithCallback = () => {
  for (let index = 0; index < 10; index++) {
    console.log('Looping: \t', index, '\t', new Date());
  }
};

syncWithCallback();

console.log('All done');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
