import axios from 'axios';
import appconfig from "../config/appconfig";

class GlobalService {
  [x: string]: any;
  constructor() {
    this.service = axios.create({
      baseURL: appconfig.tmdbEndpoint,
      headers: {
        "Content-Type": "application/json"
      }
    })

    let _this = this;
    this.service.interceptors.request.use(function(config) {
      return config;
    }, function(error) {
      return Promise.reject(error);
    })

    this.service.interceptors.response.use(function(response) {
      return response;
    }, function(error) {
      _this.callErrorHandler(error.response)
      return Promise.reject(error);
    })
  }

  get(url, config) {
    return new Promise(async (res, rej) => {
      try {
        let response = await this.service.get(url, config);
        res(response);
      } catch(error) {
        rej();
      }
    })
  }

  post(url, data, config) {
    return new Promise(async (res, rej) => {
      try {
        let response = await this.service.post(url, data, config);
        res(response);
      } catch (error) {
        rej();
      }
    })
  }

  private callErrorHandler(error) {
    switch(error.status) {
      case 401:
        this.handle401(error);
        break;
      default:
        this.handleDefault(error);
        break;
    }
  }

  private redirect(statusCode) {
    window.open(`${window.location.origin}/error?status=${statusCode}`, "_self")
  }

  private handle401(error) {
    sessionStorage.clear();
    this.redirect(error.status);
  }

  private handleDefault(error) {
    console.log(error)
  }
}

const globalService = new GlobalService();
export default globalService;