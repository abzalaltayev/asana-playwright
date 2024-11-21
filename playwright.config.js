const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://app.asana.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
  workers: 1, 
});
