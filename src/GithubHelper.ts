import { Octokit } from './OctoClient';
import { getGithubToken, getRepositoryInformation } from './utils';
import { Endpoints } from '@octokit/types';

type openPullRequestsResponse = Endpoints['GET /repos/:owner/:repo/pulls']['response'];
type mergePullRequestResponse = Endpoints['GET /repos/:owner/:repo/pulls/:pull_number/merge']['response'];

export class GitHubHelper {
  private octokit: InstanceType<typeof Octokit>;

  constructor() {
    this.octokit = new Octokit({ auth: getGithubToken() });
  }

  mergePullRequest = async (
    pullRequestNumber: number
  ): Promise<mergePullRequestResponse> => {
    const pullRequestResponse = await this.octokit.pulls.get({
      ...getRepositoryInformation(),
      pull_number: pullRequestNumber,
    });

    if (pullRequestResponse.data.changed_files) {
      return this.octokit.pulls.merge({
        ...getRepositoryInformation(),
        pull_number: pullRequestNumber,
      });
    }

    return this.octokit.pulls.update({
      ...getRepositoryInformation(),
      pull_number: pullRequestNumber,
      state: 'closed',
    });
  };

  getOpenPullRequests = (): Promise<openPullRequestsResponse> =>
    this.octokit.pulls.list({
      ...getRepositoryInformation(),
    });
}
