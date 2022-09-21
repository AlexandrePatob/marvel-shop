import { useContext, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import MarvelLoading from '../../assets/marvel-loading.gif';

import { SearchContext } from '../../contexts/SearchContext';
import { ComicsFilterProps } from '../../shared/interfaces/ComicList';

import { Container, FilterComics, ListComics, Loading, LoadMore } from './styles';

export function ComicList() {
  const { filter, filterType, searchResult, searchByComics, choices, setFilter, setFilterType } =
    useContext(SearchContext);
  const [fitlerName, setFilterName] = useState<(ComicsFilterProps | null)[]>([]);
  const [loading, setLoading] = useState(true);

  async function handleLoadMore() {
    setLoading(true);
    await searchByComics({
      limit: 12,
      offset: searchResult?.offset! + 12,
      [`${filterType}`]: filter,
      loadMore: true
    });
    setLoading(false);
  }

  async function resetFilter(newFilter: number[]) {
    setLoading(true);

    if (newFilter.length === 0) {
      await searchByComics({
        limit: 12,
        offset: 0,
        loadMore: false
      });
    } else {
      await searchByComics({
        limit: 12,
        offset: 0,
        [`${filterType}`]: newFilter,
        loadMore: false
      });
    }
    setLoading(false);
  }

  function getTitlesFromFilter() {
    const titles = choices
      .map((item) => {
        if (filter.includes(item.id)) {
          return { title: item.title, id: item.id } as ComicsFilterProps;
        }
        return null;
      })
      .filter((item) => item !== null);

    setFilterName(titles);
  }

  function formatNameCreator(name: string) {
    if (name) {
      const names = name.split(' ');
      return names.length > 1
        ? `${names[0].toUpperCase()}, ${names[1].toUpperCase()}`
        : names[0].toUpperCase();
    }
    return '';
  }

  async function handleRemoveFilter(id: number) {
    const newArray = filter.filter((item) => item !== id);
    if (filter.length === 1) {
      setFilterType('');
    }
    setFilter(newArray);
    await resetFilter(newArray);
  }

  useEffect(() => {
    if (searchResult) {
      getTitlesFromFilter();
      setLoading(false);
    }
  }, [searchResult]);

  return (
    <Container>
      <FilterComics>
        {fitlerName.length > 0 &&
          fitlerName.map((item) => {
            return (
              <div key={Number(item?.id)} onClick={() => handleRemoveFilter(item?.id!)}>
                <span>
                  {item?.title!.split('(')[0]}
                  <AiOutlineClose />
                </span>
              </div>
            );
          })}
      </FilterComics>

      <ListComics>
        {searchResult?.results &&
          searchResult?.results.length > 0 &&
          searchResult?.results.map((card) => {
            return (
              <div key={card.id}>
                <img src={`${card.thumbnail.path}.${card.thumbnail.extension}`} alt={card.title} />

                <strong className="title">{card.title}</strong>
                <span className="sustitle">{`${formatNameCreator(
                  card.creators.items[0]?.name
                )}`}</span>

                <div className="border" />
              </div>
            );
          })}
      </ListComics>

      {searchResult?.count! >= searchResult?.limit! && (
        <LoadMore onClick={() => handleLoadMore()}>
          <button>LoadMore</button>
          <div className="load-more-border"></div>
        </LoadMore>
      )}
      {loading && (
        <Loading>
          <button>Carregando...</button>
          <img src={MarvelLoading} alt="Loading" />
        </Loading>
      )}
    </Container>
  );
}
