import React, {useEffect, useState} from 'react';
import {ListItem} from "@mui/material";
import {anim} from "../../styles";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListIcon from "@mui/icons-material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import {ItemsList} from "../List/Styled";
import SubscribesListItemEmpty from "./SubscribesListItemEmpty";
import SubscribesListItem from "./SubscribesListItem";
import {useDispatch, useSelector} from "react-redux";
import {ApiHelper} from "../../service/api";
import {subscribesListHelper} from "../Users/helper";
import {subscribesHelper} from "./helper";
import {TitleList} from "./Styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {EmptySpan} from "../Users/Styled";

const Subscribes = () => {
    const [listOverall, setListOverAll] = useState([]);
    const [listDescribes, setListDescribes] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [renderList, setRenderList] = useState(false)
    const [showList, setShowList] = useState(false);
    const [animList, setAnimList] = useState(false);
    const userId = useSelector(state => state.auth.userId);
    const listSubscribes_render = useSelector(state => state.auth.listSubscribes_render);
    const dispatch = useDispatch();

    const apiHelper = new ApiHelper();
    const helper = subscribesHelper({
        apiHelper, userId, setListOverAll, setListDescribes, listOverall, listDescribes, setFilteredList, setRenderList, dispatch
    })
    useEffect(() => {
        helper.getOverall()
        helper.getAllLists()
    }, [listSubscribes_render])

    useEffect(() => {
        helper.getFilteredSubscribesLists()
    }, [listOverall, listDescribes])

    const toggleShowList = () => {
        setAnimList(!animList)
        if (showList) {
            setTimeout(() => {
                setShowList(!showList)
            }, 700)
        } else {
            setShowList(!showList)
        }
    }

    return (
        <>
            <TitleList onClick={toggleShowList}>Subscribes lists {showList ? <ExpandLessIcon /> : <ExpandMoreIcon/>}</TitleList>
            {showList && <ItemsList
                className={animList ? anim.fadeIn : anim.fadeOut}
            >
                {filteredList.length > 0 ? filteredList.map((item, ind) => {
                    if (!item.lists) {
                        return (<SubscribesListItemEmpty key={item.id} item={item} ind={ind} renderList={setRenderList}/>)
                    }
                    return (<SubscribesListItem key={item.id} item={item} ind={ind} renderList={setRenderList} />)
                }
                ) : <EmptySpan>Empty list</EmptySpan>}
            </ItemsList>}
        </>
    );
};

export default Subscribes;