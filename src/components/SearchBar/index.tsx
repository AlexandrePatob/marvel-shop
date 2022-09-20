import { useContext, useEffect, useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';

import { SearchContext } from '../../contexts/SearchContext';

import Popover from '@mui/material/Popover';
import { Checkbox } from '@mui/material';

import {
  Container,
  ContainerSearchBar,
  ItemSearchBar,
  PopoverContainer,
  PopoverItems
} from './styles';

export function SearchBar() {
  const {
    choices,
    filter,
    filterType,
    setFilterType,
    setFilter,
    searchBySeries,
    searchByCharacters,
    searchByCreators,
    searchByComics
  } = useContext(SearchContext);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setFilter([]);
  }, [choices]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

    searchByComics({
      limit: 12,
      offset: 0,
      [`${filterType}`]: filter
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!filter.includes(Number(event.target.value))) {
      setFilter([...filter, Number(event.target.value)]);
    } else {
      const newArray = filter.filter((item) => item !== Number(event.target.value));
      setFilter(newArray);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Container>
      <ContainerSearchBar>
        <ItemSearchBar>
          <strong>BROWSE BY</strong>
        </ItemSearchBar>
        <ItemSearchBar
          onClick={(event) => {
            searchBySeries();
            handleClick(event);
            setFilterType('series');
          }}
        >
          <p>SERIES</p>
          <GoTriangleDown />
        </ItemSearchBar>
        <ItemSearchBar
          onClick={(event) => {
            searchByCharacters();
            handleClick(event);
            setFilterType('characters');
          }}
        >
          <p>CHARACTERS</p>
          <GoTriangleDown />
        </ItemSearchBar>
        <ItemSearchBar
          onClick={(event) => {
            searchByCreators();
            handleClick(event);
            setFilterType('creators');
          }}
        >
          <p>CREATORS</p>
          <GoTriangleDown />
        </ItemSearchBar>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
        >
          <PopoverContainer>
            {choices.length > 0 &&
              choices.map((choice) => {
                return (
                  <PopoverItems key={choice.id}>
                    <Checkbox
                      value={choice.id}
                      checked={filter.includes(choice.id)}
                      onChange={handleCheck}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    {choice.title.split('(')[0]}
                  </PopoverItems>
                );
              })}
          </PopoverContainer>
        </Popover>
      </ContainerSearchBar>
    </Container>
  );
}
