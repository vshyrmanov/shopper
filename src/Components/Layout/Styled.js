import { styled } from '@mui/material/styles';

export const Main = styled('div')`
  height: 100%;
  width: 100vw;
  max-width: 768px;
  max-height: 1024px;
  display: flex;
  flex-direction:column;
  justify-content: flex-end;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Header = styled('div')`
  //position: absolute; 
  top: 0;
  height: 25%;
  
  
`

export const StyledAvatar = styled('div')`
  width: 100%;
  //height: 25%;
  padding: 5px 0;
  position: absolute;
  top: 0;
  .MuiIconButton-root {
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .MuiMenu-root {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`

export const StyledBackward = styled('div')`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 222;
  h1 {
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 32px;
    margin-bottom: 2px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  h3 {
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  span {
    letter-spacing: 2px;
    font-weight: 800;
  }
    svg {
      margin: 3px 10px;
      color: #fff;
      width: 30px;
      height: 35px;
      cursor: pointer;
    }
`

export const Content = styled('div')`
  display: flex;
  height: 75%;
  width: 100%;
  max-width: 768px;
  border-radius: 12px 12px 0 0;
  background: #fff;
  //position: fixed;
  right: 0;
  left: 1%;
`

export const Wrapper = styled('div')`
  width: 100%;
  overflow-y: scroll;
  border-radius: 12px 12px 0 0;
  padding: 0 2px;
`