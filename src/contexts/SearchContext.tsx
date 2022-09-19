import { createContext, ReactNode, useState } from "react";
import { readSeries, readAllComics, readCharacters, MarvelInfo, readCreators } from "../services/marvel";

interface SearchContextData {
  searchResult: MarvelInfo[];
  choices: MarvelInfo[];
  searchByCharacters: () => Promise<MarvelInfo[]>,
  searchBySeries: () => Promise<MarvelInfo[]>,
  searchByCreators: () => Promise<MarvelInfo[]>,
  searchByComics: () => Promise<MarvelInfo[]>,
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResult, setSearchResult] = useState<MarvelInfo[]>([]);
  const [choices, setChoices] = useState<MarvelInfo[]>([]);

  async function searchBySeries(limit = 24) {
    const result = await readSeries({
      limit
    });

    setChoices(result.data?.results);
    return result.data?.results as MarvelInfo[];
  }

  async function searchByCharacters(limit = 24) {
    const result = await readCharacters({
      limit,
    });

    setChoices(result.data?.results.map((character: any) => {
      return {
        ...character,
        title: character.name,
      }
    }));

    return result.data?.results as MarvelInfo[];
  }

  async function searchByCreators(limit = 24) {
    const result = await readCreators({
      limit,
    });

    setChoices(result.data?.results.map((character: any) => {
      return {
        ...character,
        title: character.fullName,
      }
    }))

    return result.data?.results as MarvelInfo[];
  }

  async function searchByComics() {
    const result = await readAllComics({
      limit: 64,
      offSet: 0
    });

    setSearchResult(result.data?.results)

    return result.data?.results as MarvelInfo[];
  }

  return (
    <SearchContext.Provider
      value={{
        choices,
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