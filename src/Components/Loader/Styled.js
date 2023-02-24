import { styled } from '@mui/material/styles';


export const Main = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(122,0,0, 0.5);
  width: 100%;
  height: 100vh;
  
`

export const Loader = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: 80px;
  }
`