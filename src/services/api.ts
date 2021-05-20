import axios from 'axios';

export class ApiService {

  public get(url: string) {
    return axios.create({
      baseURL: url
    })
  }
}

// const api = axios.create({
// });


const apiService = new ApiService();
export default apiService;
