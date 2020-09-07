import * as core from '@actions/core';

type RepositoryInformation = {
  owner: string;
  repo: string;
};

export const getRepositoryInformation = (): RepositoryInformation => {
  const repositoryInformation = process.env.GITHUB_REPOSITORY?.split('/');

  return {
    owner: repositoryInformation?.[0] || '',
    repo: repositoryInformation?.[1] || '',
  };
};

export const getGithubToken = () => core.getInput('github-token');

export const pullRequestHasLabel = (
  pullRequest: PullsListSingle,
  labelName: string
): boolean => {
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

export const hasExactRefs = (
  pullRequest: PullsListSingle,
  head: string,
  base: string
): boolean => pullRequest.head.ref === head && pullRequest.base.ref === base;
