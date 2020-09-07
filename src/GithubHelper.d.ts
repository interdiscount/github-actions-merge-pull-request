import { Endpoints } from '@octokit/types';
declare type openPullRequestsResponse = Endpoints['GET /repos/:owner/:repo/pulls']['response'];
declare type mergePullRequestResponse = Endpoints['GET /repos/:owner/:repo/pulls/:pull_number/merge']['response'];
declare type updatePullRequestResponse = Endpoints['PATCH /repos/:owner/:repo/pulls/:pull_number']['response'];
export declare class GitHubHelper {
  private octokit;
  constructor();
  mergePullRequest: (
    pullRequestNumber: number
  ) => Promise<mergePullRequestResponse | updatePullRequestResponse>;
  getOpenPullRequests: () => Promise<openPullRequestsResponse>;
}
export {};
