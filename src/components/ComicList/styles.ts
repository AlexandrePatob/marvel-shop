import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background-color: '#151515';
  justify-content: space-between;
  height: 10.5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  width: 1200px;
  height: 100%;
`;

export const ListComics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  grid-gap: 70px;
  width: 1200px;
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .border {
      width: 140px;
      border-bottom: 2px solid #151515;
    }

    img {
      box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4);
      max-width: 400px;
      max-height: 400px;
      height: 346px;
      width: 280px;
      transition: all 0.17s ease-in-out;
      position: relative;
    }
  }

  div:hover {
    img {
      bottom: 0.5em;
      brightness: 0%;
    }

    .border {
      border-color: red;
    }
  }
`;

export const FilterComics = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;

  div {
    display: flex;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;

    span {
      cursor: pointer;
      border: 1px solid black;
      padding: 10px;
      padding-right: 10px;
      text-align: center;
      justify-content: center;
      display: flex;
      align-items: center;
      gap: 18px;
    }
  }
`;

export const LoadMore = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  button {
    display: flex;
    width: 8rem;
    background-color: red;
    height: 4rem;
    margin-bottom: 12rem;
    margin: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 4px;
    font: 400 18px/1 Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    font-weight: 800;
  }

  div {
    position: absolute;
    width: 76rem;
    border-bottom: 2px solid #151515;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  button {
    display: flex;
    width: 10rem;
    background-color: red;
    height: 4rem;
    margin-bottom: 12rem;
    margin: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 4px;
    font: 400 18px/1 Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    font-weight: 800;
  }

  div {
    position: absolute;
    width: 76rem;
    border-bottom: 2px solid #151515;
  }

  img {
    max-height: 400px;
    max-width: 400px;
  }
`;
