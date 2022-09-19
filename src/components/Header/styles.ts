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

  .navigation-wrapper {
    position: relative;
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

  .container-title-banner {
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
  }

  .box-title-banner {
    display: flex;
    margin: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    text-align: center;

    span {
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      padding: 0px;
    }
    p {
      text-transform: uppercase;
      font-size: 14px;
    }

    button {
      position: relative;
      margin-top: 1rem;
    }

    .content-grid__load-more {
      text-align: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;

      button {
        background-color: transparent;
        border-radius: 0;
        border: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
        display: inline-block;
        font-weight: 700;
        margin: 15px auto;
        overflow: hidden;
        padding: 0;
        position: relative;
        letter-spacing: 0;
        width: auto;
        z-index: 10;

        div {
          background-color: transparent;
          border-left: 1px solid #151515;
          border-right: 1px solid #151515;
          color: #151515;
          opacity: 1;
          -webkit-transition: none;
          transition: none;
          text-align: center;
          line-height: 16px;
          color: #151515;
          text-align: center;
          line-height: 16px;
          box-sizing: border-box;
        }
      }
    }
  }
`;
