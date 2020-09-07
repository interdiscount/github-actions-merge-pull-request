declare type RepositoryInformation = {
  owner: string;
  repo: string;
};
export declare const getRepositoryInformation: () => RepositoryInformation;
export declare const getGithubToken: () => string;
export {};
