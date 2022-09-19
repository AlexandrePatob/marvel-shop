import { api } from './api';

export const readAllCharacters = async () => {
  try {
    const response = await api.get(`characters?orderBy=-modified`);
  } catch (e) {
    console.log(e);
  }
};
