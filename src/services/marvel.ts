import { api } from './api';

interface readChoicesProps {
  limit: number;
}

export const readCharacters = async ({ limit = 12 }: readChoicesProps) => {
  try {
    const response = await api.get(`characters?orderBy=-modified&limit=${limit}`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const readSeries = async ({ limit = 12 }: readChoicesProps) => {
  try {
    const response = await api.get(`series?orderBy=-modified&limit=${limit}`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const readCreators = async ({ limit = 12 }: readChoicesProps) => {
  try {
    const response = await api.get(`creators?orderBy=-modified&limit=${limit}`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

interface readAllComicsProps {
  limit: number;
  offset: number;
  series?: number[];
  characters?: number[];
  creators?: number[];
}

export const readAllComics = async ({
  limit = 12,
  offset = 0,
  series,
  characters,
  creators
}: readAllComicsProps) => {
  try {
    let query = '';
    query = series ? `&series=${series}` : query;
    query = characters ? `&characters=${characters}` : query;
    query = creators ? `&creators=${creators}` : query;

    const response = await api.get(
      `comics?orderBy=-modified&limit=${limit}&offset=${offset}${query}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
