Object.defineProperty(exports, '__esModule', { value: true });
exports.Octokit = void 0;
const core_1 = require('@octokit/core');
const plugin_rest_endpoint_methods_1 = require('@octokit/plugin-rest-endpoint-methods');
exports.Octokit = core_1.Octokit.plugin(
  plugin_rest_endpoint_methods_1.restEndpointMethods
);
//# sourceMappingURL=OctoClient.js.map
