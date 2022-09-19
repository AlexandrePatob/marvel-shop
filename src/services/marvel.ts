import { api, Response, Thumbnail, Creators } from './api';

export interface MarvelInfo {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  creators: {
    items: Creators[];
  };
}
interface readChoicesProps {
  limit: number;
}

export const readCharacters = async ({ limit = 12 }: readChoicesProps) => {
  try {
    const response = await api.get(
      `characters?orderBy=-modified&limit=${limit}`
    );

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
  offSet: number;
  // series: Number[];
  // characters: Number[];
  // creators: Number[];
}

export const readAllComics = async ({
  limit = 12,
  offSet = 0,
}: readAllComicsProps) => {
  try {
    const response = await api.get(
      `comics?orderBy=-modified&limit=${limit}&offSet=${offSet}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
