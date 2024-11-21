const asanaSelectors = require('../selectors/asanaSelectors');
const authData = require('../config/auth.json'); // Import credentials from auth.json

async function login(page) {
  const { emailField, passwordField } = asanaSelectors.login;
  const { url, email, password } = authData; // Destructure URL, email, and password from auth.json

  // Navigate to the login page
  await page.goto(url);

  // Fill in the email and click "Continue"
  await page.fill(emailField, email);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  // Fill in the password and click "Log in"
  await page.fill(passwordField, password);
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
}

module.exports = { login };
