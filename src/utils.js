Object.defineProperty(exports, '__esModule', { value: true });
exports.hasExactRefs = exports.pullRequestHasLabel = exports.getGithubToken = exports.getRepositoryInformation = void 0;
const tslib_1 = require('tslib');
const core = tslib_1.__importStar(require('@actions/core'));
exports.getRepositoryInformation = () => {
  var _a;
  const repositoryInformation =
    (_a = process.env.GITHUB_REPOSITORY) === null || _a === void 0
      ? void 0
      : _a.split('/');
  return {
    owner:
      (repositoryInformation === null || repositoryInformation === void 0
        ? void 0
        : repositoryInformation[0]) || '',
    repo:
      (repositoryInformation === null || repositoryInformation === void 0
        ? void 0
        : repositoryInformation[1]) || '',
  };
};
exports.getGithubToken = () => core.getInput('github-token');
exports.pullRequestHasLabel = (pullRequest, labelName) => {
  if (pullRequest.labels.length) {
    const matchingLabel = pullRequest.labels.filter(
      label => label.name === labelName
    );
    if (matchingLabel.length) {
      return true;
    }
  }
  return false;
};
exports.hasExactRefs = (pullRequest, head, base) =>
  pullRequest.head.ref === head && pullRequest.base.ref === base;
//# sourceMappingURL=utils.js.map
