import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';

export const Main = styled('div')`
  
`
export const Search = styled(TextField)`
  width: 94%;
  margin: 10px;
  
  .MuiOutlinedInput-root {
    height: 35px;
    margin: 5px;
    border-radius: 10px;
  }
`

export const EmptySpan = styled('div')`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0,0,0, 0.6);
  font-size: 13px;
  
`

export const MainSpan = styled('div')`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 45px;
  font-size: 20px;
  font-weight: 600;
  color: #424242;
`

export const UserSpan = styled('div')`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 45px;
  font-size: 20px;
  font-weight: 600;
  color: #424242;
  margin: 20px 0;
  svg {
    margin-left: 20px;
  }
`
