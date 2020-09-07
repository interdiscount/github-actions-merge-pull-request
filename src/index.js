Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const core = tslib_1.__importStar(require('@actions/core'));
const GithubHelper_1 = require('./GithubHelper');
const utils_1 = require('./utils');
const headBranch = core.getInput('head-branch');
const baseBranch = core.getInput('base-branch');
const labelName = core.getInput('label-name');
const githubHelper = new GithubHelper_1.GitHubHelper();
githubHelper
  .getOpenPullRequests()
  .then(res => {
    const pullRequests = res.data;
    if (pullRequests.length) {
      pullRequests.forEach(pullRequest => {
        if (
          utils_1.pullRequestHasLabel(pullRequest, labelName) &&
          utils_1.hasExactRefs(pullRequest, headBranch, baseBranch)
        ) {
          githubHelper
            .mergePullRequest(pullRequest.number)
            .then(res => {
              core.debug(res.data);
              if (res.data.status === 'merged') {
                core.info(
                  `Successfully merged Pull Request with number ${res.data.number}`
                );
              } else {
                core.info(
                  `Successfully closed Pull Request with number ${res.data.number}`
                );
              }
            })
            .catch(e => {
              core.setFailed(e.message);
            });
        }
      });
    } else {
      core.info(
        `No Pull Requests available from ${headBranch} to ${baseBranch}`
      );
    }
  })
  .catch(e => core.setFailed(e.message));
//# sourceMappingURL=index.js.map
