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

  .list-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
    grid-gap: 70px;
    width: 1200px;
    margin-bottom: 2rem;
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
        box-shadow: 5px 5px 13px 3px rgba(0, 0, 0, 0.23);
        max-width: 400px;
        max-height: 400px;
        height: 346px;
        width: 280px;
      }
    }
    div:hover {
      .border {
        border-color: red;
      }
    }
  }

  .filter-cards {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    div {
      display: flex;
      text-align: center;
      margin-bottom: 2rem;
      font-weight: bold;
      span {
        border: 1px solid black;
        padding: 10px;
        padding-right: 32px;
      }
    }
  }

  .load-more {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;

    button {
      display: flex;
      width: 6rem;
      background-color: red;
      height: 6rem;
      margin-bottom: 12rem;
      margin: 10px;
      text-align: center;
      justify-content: center;
      align-items: center;
    }

    div {
      position: absolute;
      width: 76rem;
      border-bottom: 2px solid #151515;
    }
  }
`;
