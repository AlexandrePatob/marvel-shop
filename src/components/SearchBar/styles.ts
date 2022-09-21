import styled from 'styled-components';

export const Container = styled.div`
  background-color: gainsboro;
  width: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;
`;

export const ContainerSearchBar = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 54px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 9rem;
  margin-left: 29rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    svg {
      padding: 2px;
      height: 24px;
      width: 24px;
    }
  }

  div:hover {
    svg {
      color: red;
    }
  }
`;

export const ItemSearchBar = styled.div``;

export const PopoverContainer = styled.div`
  display: grid;
  width: 860px;
  height: 700px;
  grid-template-columns: repeat(2, minmax(270px, 2fr));
  align-items: start;
  justify-content: start;
  text-align: start;
  background-color: #202020;
  color: white;
  padding: 50px 80px;
`;

export const PopoverItems = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  span {
    svg {
      color: red;
    }
  }
`;

export const PopoverButton = styled.div`
  margin-left: -70px;
  margin-top: 2rem;
  background: red;
  width: 70px;
  height: 22px;
  border-radius: 4px;

  button {
    width: 100%;
    height: 100%;
    color: #ffffff;
    font: 400 18px Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
  }
`;
