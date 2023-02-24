import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CustomItemMenu } from './Styled';

const ItemMenu = ({ anchorEl, handleClose, editElement, removeElement, onlyRemove = false }) => {
    const open = Boolean(anchorEl);

    return (
        <CustomItemMenu
            anchorEl={anchorEl}
            id="account-menu2"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {!onlyRemove && <MenuItem onClick={editElement}>
                Edit
                <EditIcon/>
            </MenuItem>}
            <MenuItem onClick={removeElement}>
                Delete
                <DeleteForeverIcon
                    color="error"
                    fontSize="small"

                />
            </MenuItem>
        </CustomItemMenu>
    );
};

export default ItemMenu;