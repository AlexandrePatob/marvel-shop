import { Container } from "./styles";
import { GoTriangleDown } from 'react-icons/go';
import { useContext, useEffect } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export function SearchBar() {
  const { choices, searchBySeries, searchByCharacters, searchByCreators } = useContext(SearchContext);

  useEffect(() => {
    if (choices.length > 0) {
      choices.map((result) => {
        console.log(result.title.split('(')[0])
        console.log(result.id)
      });
    }
  }, [choices]);

  return (
    <Container>
      <div className='search-tabs'>
        <div>
          <strong>BROWSE BY</strong>
        </div>
        <div onClick={() => searchBySeries()}>
          <p>SERIES</p>
          <GoTriangleDown />
        </div>
        <div onClick={() => searchByCharacters()}>
          <p>CHARACTERS</p>
          <GoTriangleDown />
        </div>
        <div onClick={() => searchByCreators()}>
          <p>CREATORS</p>
          <GoTriangleDown />
        </div>
      </div>
    </Container>
  );
}