import styled from "@emotion/styled";


export const StyledStartPage = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: ${({bg}) => `url(${bg})`};
  z-index: 12;
  img {
    width: 70px;
    height: 70px;
  }
  .img_1 {
    position: absolute;
    top: 50%;
    right: 45%;
  }
  .img_2 {
    position: absolute;
    top: 35%;
    right: 40%;
  }
  .img_3 {
    position: absolute;
    top: 22%;
    right: 25%;
  }
  .img_4 {
    position: absolute;
    top: 12%;
    right: 5%;
  }
  .img_btm {
    position: absolute;
    bottom: -20px;
    width: 100%;
    height: 50%;
    object-fit: contain;
  }
`

export const StyledSlider = styled('div')`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 8%;
  //border: 1px solid red;
  bottom: 12%;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  .slider {
    width: 80%;
    max-width: 480px;
    height: 100%;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 50px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.1px);
    -webkit-backdrop-filter: blur(7.1px);
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.43);
    }
  }
  .locker {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 50px;
    h1 {
      font-size: 30px;
      color: rgba(255,255,255, 0.7);
    }
    svg {
      color: rgba(255,255,255, 0.7);
    }
    
    //border: 1px solid rgba(255, 255, 255, 0.3);
  }
`

