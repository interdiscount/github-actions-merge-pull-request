Object.defineProperty(exports, '__esModule', { value: true });
exports.getGithubToken = exports.getRepositoryInformation = void 0;
const tslib_1 = require('tslib');
const core = tslib_1.__importStar(require('@actions/core'));
const constant_1 = require('./constant');
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
exports.getGithubToken = () => core.getInput(constant_1.GITHUB_TOKEN);
//# sourceMappingURL=utils.js.map
