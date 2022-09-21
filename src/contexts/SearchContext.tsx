import { createContext, ReactNode, useState } from 'react';
import { readSeries, readAllComics, readCharacters, readCreators } from '../services/marvel';
import { Response } from '../shared/interfaces/Api';
import { MarvelInfo } from '../shared/interfaces/Marvel';

interface SearchContextData {
  searchResult: Response | undefined;
  choices: MarvelInfo[];
  filter: number[];
  filterType: string;
  setFilterType: (value: string) => void;
  setFilter: (props: number[]) => void;
  searchByCharacters: () => Promise<MarvelInfo[]>;
  searchBySeries: () => Promise<MarvelInfo[]>;
  searchByCreators: () => Promise<MarvelInfo[]>;
  searchByComics: (props: searchByComicsProps) => Promise<Response>;
}

interface SearchProviderProps {
  children: ReactNode;
}

interface searchByComicsProps {
  limit: number;
  offset: number;
  series?: number[];
  characters?: number[];
  creators?: number[];
  loadMore?: boolean;
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResult, setSearchResult] = useState<Response>();
  const [choices, setChoices] = useState<MarvelInfo[]>([]);
  const [filter, setFilter] = useState<number[]>([]);
  const [filterType, setFilterType] = useState<string>('');

  async function searchBySeries(limit = 24) {
    const result = await readSeries({
      limit
    });

    setChoices(result.data?.results);
    return result.data?.results as MarvelInfo[];
  }

  async function searchByCharacters(limit = 24) {
    const result = await readCharacters({
      limit
    });

    setChoices(
      result.data?.results.map((character: any) => {
        return {
          ...character,
          title: character.name
        };
      })
    );

    return result.data?.results as MarvelInfo[];
  }

  async function searchByCreators(limit = 24) {
    const result = await readCreators({
      limit
    });

    setChoices(
      result.data?.results.map((character: any) => {
        return {
          ...character,
          title: character.fullName
        };
      })
    );

    return result.data?.results as MarvelInfo[];
  }

  async function searchByComics({
    limit = 12,
    offset = 1,
    series,
    characters,
    creators,
    loadMore = false
  }: searchByComicsProps) {
    const result = await readAllComics({
      limit,
      offset,
      series,
      characters,
      creators
    });

    if (loadMore) {
      setSearchResult({
        ...result.data,
        results: [...searchResult?.results!, ...result.data.results]
      });
    } else {
      setSearchResult(result.data);
    }

    return result.data as Response;
  }

  return (
    <SearchContext.Provider
      value={{
        choices,
        filter,
        setFilter,
        filterType,
        setFilterType,
        searchResult,
        searchBySeries,
        searchByCharacters,
        searchByCreators,
        searchByComics
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
