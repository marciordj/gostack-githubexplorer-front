import apiService, { ApiService }  from './api';


class RepositoriesService {
  constructor(private apiService: ApiService) {}

  public getrepositories() {
    return this.apiService.get('https://api.github.com')
  }
}

const repositoriesService = new RepositoriesService(apiService)
export default repositoriesService