import { MarvelInfo } from './Marvel';

export interface Response {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelInfo[];
}
