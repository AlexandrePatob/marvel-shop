import styled from 'styled-components';

export const Container = styled.div`
  .footer-container {
    display: flex;
    background-color: #151515;
    maxwidth: 100%;
    align-items: left;
    justify-content: left;
    color: white;
    flex-direction: row;
    minheight: 500px
    gap: 2rem;
    height: 100%;
    margin-bottom: 5rem;
    justify-content: space-around;
    border-bottom: 2px solid white;    

    div {
     align-items: baseline;
     display: flex;
      flex-direction: column;
      max-width: 200px;
      width: 100%;
      margin-right: 40px;
      margin-bottom: 2rem;

        a {
        align-items: left;
      }
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  background-color: #151515;
  maxwidth: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
`;
