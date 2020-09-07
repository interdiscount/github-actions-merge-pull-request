Object.defineProperty(exports, '__esModule', { value: true });
exports.GitHubHelper = void 0;
const tslib_1 = require('tslib');
const OctoClient_1 = require('./OctoClient');
const utils_1 = require('./utils');
class GitHubHelper {
  constructor() {
    this.createPullRequest = (title, body, head, base) =>
      tslib_1.__awaiter(this, void 0, void 0, function*() {
        return this.octokit.pulls.create(
          Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), {
            title,
            body,
            head,
            base,
          })
        );
      });
    this.addLabelToPullRequest = (issueNumber, label) =>
      tslib_1.__awaiter(this, void 0, void 0, function*() {
        return this.octokit.issues.addLabels(
          Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), {
            issue_number: issueNumber,
            labels: [label],
          })
        );
      });
    this.octokit = new OctoClient_1.Octokit({ auth: utils_1.getGithubToken() });
  }
}
exports.GitHubHelper = GitHubHelper;
//# sourceMappingURL=GithubHelper.js.map
