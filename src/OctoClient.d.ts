import { Octokit as Core } from '@octokit/core';
export { OctokitOptions } from '@octokit/core/dist-types/types';
export declare const Octokit: {
  new (...args: any[]): {
    [x: string]: any;
  };
  plugins: any[];
} & typeof Core &
  import('@octokit/core/dist-types/types').Constructor<
    import('@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types').RestEndpointMethods
  >;
