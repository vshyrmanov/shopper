import BottomNavigation from '@mui/material/BottomNavigation';
import styled from "@emotion/styled";


export const BottomNavStyled = styled(BottomNavigation)`
  position: fixed; 
  bottom: 0;
  left: 1%; 
  width: 98%;
  padding: 10px 0 30px 0;
  height: 80px;
  z-index: 5 !important;
`

export const StyledAddButton = styled('div')`
  position: absolute;
  bottom: 50px;
  right: 10px;
  z-index: 5;
  cursor: pointer;
  &:hover {
    svg {
      color: #4caf50;
    }
    
  }
  svg {
    color: #bebebe;
    width: 50px;
    height: 50px;
    transition: 250ms ease-in-out;
    &:hover {
      color: #4caf50;
    }
  }
`

export const StyledDrawer = styled('div')`
  height: auto;
  background-image: url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1800&t=st=1660372540~exp=1660373140~hmac=a21444d5edf1ea13093e92d12b596171b03a55e6272c2b17f5a3bf5ea961c3eb);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Puller = styled('div')`
  width: 90px;
  height: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translate(-50%, 8px);
`

