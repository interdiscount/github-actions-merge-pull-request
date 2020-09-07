import { Endpoints } from '@octokit/types';
declare type createPullRequestResponse = Endpoints['POST /repos/:owner/:repo/pulls']['response'];
declare type addLabelResponse = Endpoints['POST /repos/:owner/:repo/issues/:issue_number/labels']['response'];
export declare class GitHubHelper {
  private octokit;
  constructor();
  createPullRequest: (
    title: string,
    body: string,
    head: string,
    base: string
  ) => Promise<createPullRequestResponse>;
  addLabelToPullRequest: (
    issueNumber: number,
    label: string
  ) => Promise<addLabelResponse>;
}
export {};
