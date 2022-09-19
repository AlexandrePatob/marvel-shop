import styled from 'styled-components';

export const Container = styled.header`
  background-color: #000000;
  width: 100%;
  display: flex;
  margin: 0 auto;

  .header-tabs {
    display: flex;
    justify-content: space-between;
    height: 36px;
    margin: 0 auto;
    max-width: 1200px;
    flex-direction: row;
    align-items: center;
    width: 100%;

    header {
      p {
        color: #ffff;
      }
    }

    div:hover {
      border-bottom: 2px solid red;
    }
  }
`;
