export interface GetCommitData{
  ok : boolean;
  msg: string;
  data: GitHubCommit[];
  dataLength : number;
} 

export interface GitHubCommit {
  sha:          string;
  node_id:      string;
  commit:       Commit;
  url:          string;
  html_url:     string;
  comments_url: string;
  author:       GitHubCommitAuthor;
  committer:    GitHubCommitAuthor;
  parents:      Parent[];
}

export interface GitHubCommitAuthor {
  login:               Login;
  id:                  number;
  node_id:             NodeID;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       FollowingURL;
  gists_url:           GistsURL;
  starred_url:         StarredURL;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          EventsURL;
  received_events_url: string;
  type:                Type;
  site_admin:          boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersChaboxxEventsPrivacy = "https://api.github.com/users/chaboxx/events{/privacy}",
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersChaboxxFollowingOtherUser = "https://api.github.com/users/chaboxx/following{/other_user}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersChaboxxGistsGistID = "https://api.github.com/users/chaboxx/gists{/gist_id}",
}

export enum Login {
  Chaboxx = "chaboxx",
}

export enum NodeID {
  MDQ6VXNlcjU4MTQ3NjYy = "MDQ6VXNlcjU4MTQ3NjYy",
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersChaboxxStarredOwnerRepo = "https://api.github.com/users/chaboxx/starred{/owner}{/repo}",
}

export enum Type {
  User = "User",
}

export interface Commit {
  author:        CommitAuthor;
  committer:     CommitAuthor;
  message:       string;
  tree:          Tree;
  url:           string;
  comment_count: number;
  verification:  Verification;
}

export interface CommitAuthor {
  name:  Name;
  email: Email;
  date:  Date;
}

export enum Email {
  Chaboxx159GmailCOM = "chaboxx159@gmail.com",
}

export enum Name {
  Rodrigo = "RODRIGO",
  Unknown = "unknown",
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified:  boolean;
  reason:    Reason;
  signature: null;
  payload:   null;
}

export enum Reason {
  Unsigned = "unsigned",
}

export interface Parent {
  sha:      string;
  url:      string;
  html_url: string;
}
