import React, { useCallback, useEffect, useState, memo } from 'react';
import { searchHelper } from "./helper";
import { ApiHelper } from "../../service/api";
import { Search } from "./Styled";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";

const UserSearch = memo(({ setFilteredList, setIsEmptyList }) => {
    const isLoader = useSelector(state => state.subscribes.isLoader)
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    const apiHelper = new ApiHelper();
    const helper = searchHelper({
        apiHelper, setList, setValue, value, list, setFilteredList, setIsEmptyList
    })
    useEffect(() => {
        helper.getList()
    }, [])

    useEffect(() => {
        helper.searchUser()
    }, [value, isLoader])

    return (
        <Search
            value={value}
            onChange={helper.handleValue}
            placeholder="Search some user"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>

                ),
                endAdornment: value.length > 0 && (
                    <InputAdornment position="end">
                        <CloseIcon onClick={helper.clearInput} />
                    </InputAdornment>
                )
            }}
        />
    );
});

export default UserSearch;