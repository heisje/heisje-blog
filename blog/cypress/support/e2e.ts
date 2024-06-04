// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Cypress.Screenshot.defaults({ overwrite: false, capture: 'runner' });
let timestamp: any;
Cypress.Screenshot.defaults({
  onBeforeScreenshot($el) {
    timestamp = document.createElement('span');
    timestamp.innerText = new Date().toLocaleString('de-DE');
    const $body = $el.find('body');
    $el[0].insertBefore(timestamp, $body[0]);
  },
  onAfterScreenshot($el, props) {
    timestamp.remove();
  },
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
