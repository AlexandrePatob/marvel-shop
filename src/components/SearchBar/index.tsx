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
  PopoverItems,
  PopoverButton
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
  };

  const handleFilter = () => {
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
            if (filterType !== 'series') {
              searchBySeries();
            }
            handleClick(event);
            setFilterType('series');
          }}
        >
          <p>SERIES</p>
          <GoTriangleDown />
        </ItemSearchBar>
        <ItemSearchBar
          onClick={(event) => {
            if (filterType !== 'characters') {
              searchByCharacters();
            }
            handleClick(event);
            setFilterType('characters');
          }}
        >
          <p>CHARACTERS</p>
          <GoTriangleDown />
        </ItemSearchBar>
        <ItemSearchBar
          onClick={(event) => {
            if (filterType !== 'creators') {
              searchByCreators();
            }
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
          onClose={handleClose}
          anchorEl={anchorEl}
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
            <div></div>
            <PopoverButton>
              <button onClick={handleFilter}>OK</button>
            </PopoverButton>
          </PopoverContainer>
        </Popover>
      </ContainerSearchBar>
    </Container>
  );
}
