export interface IRepositoryParams {
  repository: string;
}

export interface IRepositoryData {
   full_name: string;
   description: string;
   forks_count: number;
   open_issues_count: number;
   stargazers_count: number;
   owner: {
     login: string;
     avatar_url:string;
   }
}

export interface IIssues {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }

}