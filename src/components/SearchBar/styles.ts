import styled from 'styled-components';

export const Container = styled.div`
  background-color: gainsboro;
  width: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;

  .search-tabs {
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
  }
`;
