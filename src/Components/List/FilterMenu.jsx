import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {filterHelper} from "./helper";

const FilterMenu = ({ anchorEl, setAnchorEl, handleFilter, resetFilter }) => {
    const helper = filterHelper({ setAnchorEl })
    const open = Boolean(anchorEl);
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu2"
            open={open}
            onClose={helper.handleClose}
            onClick={helper.handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={() => handleFilter('onlyDone')}>
                Show only done
            </MenuItem>
            <MenuItem onClick={() => handleFilter('onlyUndone')}>
                Show only undone
            </MenuItem>
            <MenuItem>
                Sort by not done
            </MenuItem>
            <MenuItem onClick={resetFilter}>
                reset
            </MenuItem>
        </Menu>
    );
};

export default FilterMenu;