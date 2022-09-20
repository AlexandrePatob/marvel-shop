import styled from 'styled-components';

export const Header = styled.header`
  background-color: #ffffff;
`;

export const WelcomeAccount = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  max-width: 1200px;
  padding-top: 25px;
  margin-bottom: -5rem;
  gap: 1rem;
  align-items: center;

  h5 {
    font: 400 16px/1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
  }
`;

export const IconContainer = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  background-color: '#FFFF';
  justify-content: space-between;
  height: 10.5rem;
  margin-bottom: -4px;

  .icons-social {
    display: flex;
    justify-content: space-between;
  }
`;

export const Search = styled.div`
  border: 0;
  border-bottom: 1px solid #151515;
  position: relative;
  width: 20rem;
  height: 28px;

  input {
    background-color: #ffffff;
    border: 0;
    width: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
    font: 800 18px/1 RobotoCondensed Regular, Trebuchet MS, Helvetica, Arial, sans-serif;
  }

  button {
    position: absolute;
    top: -6px;
    right: 4px;
    z-index: 10;
    border: none;
    background: transparent;
    outline: none;

    svg {
      color: #202020;
      height: 32px;
      width: 32px;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;
`;

export const MarvelLogoComponent = styled.img`
  display: flex;
  height: 14.5rem;
  width: 14.5rem;
`;

export const SocialIcon = styled.img`
  color: #151515;
  display: flex;
  margin-bottom: -3rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
`;

export const Dots = styled.div`
  margin: 4px auto;
`;
