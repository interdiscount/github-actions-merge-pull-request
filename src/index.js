Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const core = tslib_1.__importStar(require('@actions/core'));
const GithubHelper_1 = require('./GithubHelper');
const headBranch = core.getInput('head-branch');
const baseBranch = core.getInput('base-branch');
const labelName = core.getInput('label-name');
const pullRequestTitle = core.getInput('pull-request-title');
const pullRequestBody = core.getInput('pull-request-body');
const githubHelper = new GithubHelper_1.GitHubHelper();
githubHelper
  .createPullRequest(pullRequestTitle, pullRequestBody, headBranch, baseBranch)
  .then(res => {
    core.setOutput(
      'message',
      `Successfully created Pull Request with number ${res.data.number}`
    );
    githubHelper
      .addLabelToPullRequest(res.data.number, labelName)
      .then(() =>
        core.setOutput('message', `Successfully attached label (${labelName})`)
      )
      .catch(e => core.setFailed(e.message));
  })
  .catch(e => core.setFailed(e.message));
//# sourceMappingURL=index.js.map
