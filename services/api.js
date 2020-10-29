import axios from 'axios'

const api = axios.create({
    baseURL: 'https://appconibase.azurewebsites.net'
  });
  
  export default api;