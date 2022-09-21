import styled from 'styled-components';

export const Container = styled.div`
  [class^='number-slide'],
  [class*=' number-slide'] {
    background: #1b1a1f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 500px;
    max-height: 100vh;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 34rem;
  }

  .arrow--right {
    left: auto;
    right: 34rem;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

export const ContainerTitleBanner = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 0px;
  justify-content: center;
  border: 4px solid white;
  position: relative;
  margin-top: -6rem;
  background-color: white;
  border-radius: 1rem;
`;

export const BoxBannerTitle = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  text-align: center;

  span {
    font: 400 16px/1.3 Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding: 0px;
    font-weight: bold;
  }

  p {
    text-transform: uppercase;
    font-size: 14px;
    font: 400 16px/1.3 Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;
  }

  button {
    margin-top: 6px;
    margin-bottom: 6px;
    background-color: red;
    width: 205px;
    height: 40px;
    border-radius: 13px;
  }
`;

export const BannerImagesContainer = styled.div`
  position: relative;
  marginbottom: 2rem;
`;
