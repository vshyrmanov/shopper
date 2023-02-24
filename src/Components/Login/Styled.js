import styled from "@emotion/styled";
import Box from '@mui/material/Box';



export const Main = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  //background: #fff;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({bg}) => `url(${bg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const FormBox = styled(Box)`
  width: 80%;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  .field {
    margin: 10px 0;
  }
`

export const GuestLink = styled('div')`
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 18px;
    color: rgba(0,0,0, 0.7);
    text-align: center;
    width: 250px;
    padding: 10px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.1px);
    -webkit-backdrop-filter: blur(7.1px);
    //border: 1px solid rgba(255, 255, 255, 0.3);
  }
`

export const TabsBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AlertArea = styled('div')`
  position: absolute;
  top: 10px;
  left: 5px;
  right: 5px;
  width: 98%;
  opacity: 0.8;
  .MuiAlertTitle-root {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`