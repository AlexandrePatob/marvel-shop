import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    background-color: #151515;
    maxwidth: 100%;
    align-items: left;
    justify-content: left;
    color: white;
    flex-direction: row;
    minheight: 500px
    gap: 2rem;
    height: 324px;
    width: 1100px;
    justify-content: space-between;
    border-bottom: 2px solid white;    

    div {
      align-items: baseline;
      display: flex;
      flex-direction: column;
      max-width: 200px;
      width: 100%;
      margin-right: 40px;
      margin-bottom: 2rem;
      gap: 17px;
      font-size: 14px;

      strong {
        text-transform: uppercase;
        font-family: "Roboto Bold","Trebuchet MS",Helvetica,Arial,sans-serif;
        font-size: 16px;
        letter-spacing: 1px;
      }

      span {
        align-items: left;
        font-family: "Roboto","Trebuchet MS",Helvetica,Arial,sans-serif;
        font-size: 13px;
        letter-spacing: 1px;
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

export const FooterSubContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const NavSubContainer = styled.nav`
  flex-wrap: wrap;
  display: flex;
  padding-bottom: 12px;
`;

export const NavItems = styled.a`
  color: #767676;
  font-size: 12px;
  text-decoration: none;
  line-height: 1.2em;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const NavSpan = styled.span`
  color: #767676;
  font-size: 12px;
  text-decoration: none;
  line-height: 1.2em;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const SocialIcon = styled.img`
  color: #151515;
  display: flex;
  padding-right: 5px;
  margin-top: -2rem;
`;

export const MarvelIcon = styled.img`
  height: 63px;
  width: 67px;
  margin-top: -29px;
  position: relative;
`;
