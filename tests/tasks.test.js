const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/loginHelper');
const { AsanaPage } = require('../pages/asanaPage');
const testData = require('../data/scenarios.json');

test.describe('Asana Task Validation', () => {
  test.beforeEach(async ({ page }) => {
    // Login to Asana
    await login(page);
  });

  testData.forEach((project) => {
    project.tasks.forEach((task, index) => {
      test(`Test Case ${index + 1}: Validate "${task.name}" in "${project.project}"`, async ({ page }) => {
        const asanaPage = new AsanaPage(page);

        await asanaPage.navigateToProject(project.project);

        const columnLocator = await asanaPage.getColumn(task.column);
        await expect(columnLocator).toBeVisible();

        const taskLocator = await asanaPage.getTask(columnLocator, task.name);
        await expect(taskLocator).toBeVisible();

        const tags = {
          priority: task.priority,
          status: task.status,
          effort: task.effort,
          type: task.type,
          progress: task.progress,
        };
        await asanaPage.validateTags(taskLocator, tags, expect);
      });
    });
  });
});
