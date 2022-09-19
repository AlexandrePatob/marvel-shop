import { useContext, useEffect } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { Container } from "./styles";

export function ImageList() {
  const { searchResult, searchByComics } = useContext(SearchContext);

  useEffect(() => {
    const getData = async () => {
      await searchByComics()
    };

    getData();
  }, []);

  function formatNameCreator(name: string) {
    var names = name.split(" ");
    return names.length > 1
      ? `${names[0].toUpperCase()}, ${names[1].toUpperCase()}`
      : names[0].toUpperCase()
  }

  return (
    <Container>
      <div className='filter-cards'>
        <div>
          <span>X-MAN</span>
        </div>
        <div>
          <span>Spider-man</span>
        </div>
      </div>
      <div className="list-cards">
        {searchResult.length > 0 &&
          searchResult.map((card) => {
            return (
              <div key={card.id}>
                <img src={`${card.thumbnail.path}.${card.thumbnail.extension}`} />

                <strong className="title">{card.title}</strong>
                <span className="sustitle">{`${formatNameCreator(card.creators.items[0]?.name)}`}</span>

                <div className="border" />
              </div>
            )
          })}
      </div>

      <div className='load-more' onClick={
        () => searchByComics()
      }>
        <button>LoadMore</button>
        <div className='load-more-border'></div>
      </div>

    </Container >
  );
}