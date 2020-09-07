declare type RepositoryInformation = {
  owner: string;
  repo: string;
};
export declare const getRepositoryInformation: () => RepositoryInformation;
export declare const getGithubToken: () => string;
export declare const pullRequestHasLabel: (
  pullRequest: PullsListSingle,
  labelName: string
) => boolean;
export declare const hasExactRefs: (
  pullRequest: PullsListSingle,
  head: string,
  base: string
) => boolean;
export {};
