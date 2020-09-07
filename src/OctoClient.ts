import { Octokit as Core } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
export { OctokitOptions } from '@octokit/core/dist-types/types';

export const Octokit = Core.plugin(restEndpointMethods);
