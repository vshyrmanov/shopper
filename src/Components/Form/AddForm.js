import { useState, useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import { CustomTextField, StyledForm } from "./Styled";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import uniqid from 'uniqid';
import {addFormHelper} from "./helper";

const AddForm = () => {
    const isGuest = useSelector(state => state.guestSession.isGuest);
    const userId = useSelector(state => state.auth.userId);
    const editItem = useSelector(state => state.auth.editItem)

    const [count, setCount] = useState(0);
    const [typeOfForm, setTypeOfForm] = useState();
    const [owner, setOwner] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [values, setValues] = useState({
        listName: "",
        itemName: "",
        desc: "",
    })



    const location = useLocation();
    const dispatch = useDispatch();

    const listForm = isGuest ? {
        "_id": uniqid(),
        "name": values.listName,
    } : {
        "name": values.listName,
        "owner": userId
    }

    const itemForm = isGuest ? {
        "_id": uniqid(),
        "name": values.itemName,
        "desc": values.desc,
        "quantity": count,
        "owner": owner,
        "done": false,
    } : {
        "name": values.itemName,
        "desc": values.desc,
        "quantity": count,
        "owner": owner,
    }


    useEffect(() => {
        if (Object.keys(editItem).length > 0) {
            setIsEdit(true)
            setValues({
                itemName: editItem.name,
                desc: editItem.desc,
                listName: editItem.name,
            })
            setCount(editItem.quantity)
        } else {
            setIsEdit(false)
        }
    }, [editItem])


    useEffect(() => {
        if (location.pathname.includes('items')) {
            setTypeOfForm('item')
            setOwner(location.pathname.split('/')[2])
        } else {
            setTypeOfForm('list')
        }
    }, [location])

    const helper = addFormHelper({
            dispatch, isGuest, listForm, itemForm, typeOfForm, count, setCount, values, setValues
    })

    return typeOfForm === 'list' ? (
        <StyledForm>
            <CustomTextField
                value={values.listName}
                onChange={helper.handleListName}
                label="Add new list name"
                variant="standard"
            />
            <Button
                fullWidth
                variant="contained"
                onClick={isEdit ? helper.updateList(editItem.id) : helper.addNewList}>
                {isEdit ? "Edit" : "Add"}
            </Button>
        </StyledForm>
    ) : (
        <StyledForm>
            <CustomTextField
                value={values.itemName}
                onChange={helper.handleItemName}
                label="Item name"
                variant="standard"
            />
            <div className="weight">
                    <CustomTextField
                        variant="standard"
                        type="text"
                        label="Description"
                        value={values.desc}
                        onChange={helper.handleDescription}
                    />
                </div>
                <div className="quantity">
                    <IconButton onClick={helper.decrement}>
                        <RemoveIcon />
                    </IconButton>
                        <span>{count}</span>
                    <IconButton onClick={helper.increment}>
                        <AddIcon />
                    </IconButton>
                </div>
            <Button
                onClick={isEdit > 0 ? helper.updateItem(editItem.id) : helper.addNewItem}
                fullWidth
                variant="contained">
                {isEdit ? "Edit" : "Add"}
            </Button>
        </StyledForm>
    )
}

export default AddForm;