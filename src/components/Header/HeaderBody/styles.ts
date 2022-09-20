import styled from 'styled-components';

export const Container = styled.header`
  background-color: #202020;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const HeaderTabs = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45px;
  margin: 0 auto;
  max-width: 1200px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font: 400 18px/1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  font-weight: 800;

  header {
    p {
      color: #ffff;
    }
  }

  div:hover {
    border-bottom: 2px solid red;
  }
`;
