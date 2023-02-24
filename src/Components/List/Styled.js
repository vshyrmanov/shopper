import styled from "@emotion/styled";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Menu from "@mui/material/Menu";


export const ItemsListWrapper = styled('div')`
  position: relative;
  width: 100%;
  background-color: #fff;
  overflow: scroll;
`

export const ItemsList = styled('ul')`
  width: 100%; 
  background-color: #fff;
  padding: 10px 0 10px 0; 
  overflow: scroll;
  cursor: pointer;
  
  
  .empty_list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: rgba(0,0,0, 0.6);
      font-size: 13px;
    }
  }
`

export const EmptyList = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0,0,0, 0.6);
  font-size: 13px;
`

export const StyledLoader = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: green;
  }
`

export const ListItemWrapper = styled('div')`
  overflow: auto; 
  display: flex; 
  scroll-snap-type: x mandatory;
  .line {
    position: absolute;
    //border: 1px solid rgba(0,0,0, 0.3);
    width: 0px;
    top: 25px;
    left: 80px;
    transition: 500ms ease-in-out;
  }
  .check {
    border: 1px solid rgba(0,0,0, 0.3);
    width: 200px;
  }
`

export const CustomListItem = styled(ListItem)`
  min-width: 100%; 
  scroll-snap-align: start; 
  position: relative;
  .avatar {
    color: ${({bg}) => bg === "true" ? '#bebebe' : "#8bc34a"};
  }
  .quantity_label {
    font-size: 14px;
    letter-spacing: 4px;
    font-weight: 600;
  }
  .disabled {
    color: rgba(0,0,0, 0.4);
    font-size: 14px;
    letter-spacing: 4px;
  }
`


export const ListAvatar = styled( ListItemAvatar )`
`

export const CustomListItemText = styled(ListItemText)`
  color: ${({fc}) => fc === "true" ? '#bebebe' : "#000"};
  word-break: break-all;
`

export const CustomTypography = styled('span')`
  color: ${({fc}) => fc === "true" ? '#bebebe' : "rgba(0,0,0, 0.5)"};
  font-size: 14px;
`

export const Quantity = styled('span')`
  margin-right: 10px;
`

export const ItemSettings = styled('div')`
  scroll-snap-align: end;
  min-width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Filter = styled('div')`
  width: 100%;
  heigth: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid red;
  padding: 0 20px;
`

export const CustomItemMenu = styled(Menu)`
  .MuiMenuItem-root {
    //border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

