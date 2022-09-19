import axios from 'axios';
import md5 from 'md5';

export interface Creators {
  name: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Response {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: [];
}

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

api.interceptors.request.use(
  async (config) => {
    config.url = `${config.url}${authUrl()}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function authUrl() {
  var publicKey = '0568f33b46aebba423be187123150658';
  var privateKey = '1f6842c8c1a2c61a4f06e95c5cd9f6502c3c01b5';
  var ts = new Date().getTime();

  var message = ts + privateKey + publicKey;
  var hash = md5(message);

  return `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
}
