const asanaSelectors = {
  
  login: {
    emailField: 'input[type="email"]',
    continueButton: 'button:has-text("Continue")',
    passwordField: 'input[type="password"]',
    submitButton: 'button[type="submit"]',
  },

  projectLink: (projectName) => `text=${projectName}`,
  column: (columnName) => `div.CommentOnlyBoardColumn:has-text("${columnName}")`,
  task: (taskName) => `div.CommentOnlyBoardColumnCardsContainer-itemContainer:has-text("${taskName}")`,
  tag: (tagText) => `text=${tagText}`,
};

module.exports = asanaSelectors;
