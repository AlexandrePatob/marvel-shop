import { api, Response, Thumbnail, Creators } from './api';

export interface MarvelInfo {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  creators: {
    items: Creators[];
  };
}

interface readAllComicsProps {
  limit: number;
}

export const readAllComics = async ({ limit = 12 }: readAllComicsProps) => {
  try {
    const response = await api.get(`comics?orderBy=-modified&limit=${limit}`);

    const result = response.data.data as Response;

    return {
      ...result,
      results: result.results as MarvelInfo[],
    } as Response;
  } catch (e) {
    console.log(e);
  }
};
