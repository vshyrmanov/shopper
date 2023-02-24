import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";
import Box from "@mui/material/Box";


export const StyledForm = styled('div')`
  margin: 30px 0;
  padding: 15px;
  min-height: 30vh;
  width: 90%;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  button {
    background: #4caf50;
    margin: 10px 0;
  }
  .weight {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    width: 100%;
      .MuiNativeSelect-root {
        margin-bottom: 10px;
        width: 40%;
        margin-right: 30px;
        color: rgba(0,0,0, 0.5);
      }
  }
  .quantity {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    span {
      font-size: 20px;
      color: rgba(0,0,0, 0.5);
    }
    .MuiIconButton-root {
      color: #fff;
      background: #8bc34a;
      &:nth-of-type(1) {
        background: #ef5350;
      }
      
      
    }
  }
`

export const CustomTextField = styled(TextField)`
  width: 100%;
  margin: 10px 0;
`

export const Counter = styled('div')`
  width: 100%; 
  display: flex; 
  justify-content: space-evenly;
  align-items: center; 
  margin-top: 10px;
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

export const TabsBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`