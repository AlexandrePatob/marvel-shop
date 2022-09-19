import styled from 'styled-components';

export const Header = styled.header`
  background-color: #ffffff;

  .welcome-account {
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    max-width: 1200px;
    padding-top: 25px;
    margin-bottom: -5rem;
    gap: 1rem;
    align-items: center;
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

  .header-right {
    display: flex;
    justify-content: space-between;
    width: 15rem;
    margin: 1rem;
    align-items: flex-start;
    color: #151515;
  }

  .bi-dots {
    margin: 4px auto;
  }

  .icons-container {
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
  }

  .social-icons {
    color: #151515;
    display: flex;
    margin-bottom: -3rem;
  }

  .marvel-logo {
    display: flex;
    height: 14.5rem;
    width: 14.5rem;
  }

  .search-container {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    gap: 2rem;
  }

  .search {
    border: 0;
    border-bottom: 1px solid #151515;
    position: relative;
    width: 17rem;
    height: 28p;

    input {
      font-size: 17px;
      background-color: #ffffff;
      border: 0;
      width: 100%;
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
        color: #000000;
        height: 32px;
        width: 32px;
      }
    }
  }
`;
