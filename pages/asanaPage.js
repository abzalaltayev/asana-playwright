const asanaSelectors = require('../selectors/asanaSelectors');

class AsanaPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToProject(projectName) {
    await this.page.click(asanaSelectors.projectLink(projectName));
  }

  async getColumn(columnName) {
    return this.page.locator(asanaSelectors.column(columnName));
  }

  async getTask(columnLocator, taskName) {
    return columnLocator.locator(asanaSelectors.task(taskName));
  }

  async validateTags(taskLocator, tags, expect) {
    for (const [key, value] of Object.entries(tags)) {
      if (value) {
        const tagLocator = taskLocator.locator(asanaSelectors.tag(value));
        await expect(tagLocator).toBeVisible();
      }
    }
  }
}

module.exports = { AsanaPage };
