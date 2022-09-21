/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios';
import md5 from 'md5';

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/'
});

function authUrl() {
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY!;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY!;
  const ts = new Date().getTime();

  const message = ts + privateKey + publicKey;
  const hash = md5(message);

  return `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
}

api.interceptors.request.use(
  async (config) => {
    config.url = `${config.url}${authUrl()}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
