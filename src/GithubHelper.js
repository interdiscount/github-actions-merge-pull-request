Object.defineProperty(exports, '__esModule', { value: true });
exports.GitHubHelper = void 0;
const tslib_1 = require('tslib');
const OctoClient_1 = require('./OctoClient');
const utils_1 = require('./utils');
class GitHubHelper {
  constructor() {
    this.mergePullRequest = pullRequestNumber =>
      tslib_1.__awaiter(this, void 0, void 0, function*() {
        const pullRequestResponse = yield this.octokit.pulls.get(
          Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), {
            pull_number: pullRequestNumber,
          })
        );
        if (pullRequestResponse.data.changed_files) {
          return this.octokit.pulls.merge(
            Object.assign(
              Object.assign({}, utils_1.getRepositoryInformation()),
              { pull_number: pullRequestNumber }
            )
          );
        }
        return this.octokit.pulls.update(
          Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), {
            pull_number: pullRequestNumber,
            state: 'closed',
          })
        );
      });
    this.getOpenPullRequests = () =>
      this.octokit.pulls.list(
        Object.assign({}, utils_1.getRepositoryInformation())
      );
    this.octokit = new OctoClient_1.Octokit({ auth: utils_1.getGithubToken() });
  }
}
exports.GitHubHelper = GitHubHelper;
//# sourceMappingURL=GithubHelper.js.map
