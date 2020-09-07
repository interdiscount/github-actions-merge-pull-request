import * as core from '@actions/core';
import { GitHubHelper } from './GithubHelper';
import { hasExactRefs, pullRequestHasLabel } from './utils';

const headBranch: string = core.getInput('head-branch');
const baseBranch: string = core.getInput('base-branch');
const labelName: string = core.getInput('label-name');

const githubHelper = new GitHubHelper();

githubHelper
  .getOpenPullRequests()
  .then(res => {
    const pullRequests = res.data;

    if (pullRequests.length) {
      pullRequests.forEach(pullRequest => {
        if (
          pullRequestHasLabel(pullRequest, labelName) &&
          hasExactRefs(pullRequest, headBranch, baseBranch)
        ) {
          githubHelper
            .mergePullRequest(pullRequest.number)
            .then(res => {
              core.setOutput(
                'message',
                `Successfully merged Pull Request with number ${res.data.number}`
              );
            })
            .catch(e => {
              core.setFailed(e.message);
            });
        }
      });
    } else {
      core.setOutput('message', `No Pull Requests available`);
    }
  })
  .catch(e => core.setFailed(e.message));
