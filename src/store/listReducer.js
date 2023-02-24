
const defaultState = {
    isAuth: false,
    userId: "",
    jwtToken: "",
    items_render: false,
    list_render: false,
    list_name: "",
    userList: [],
    userListItem: [],
    filtered: false,
    editItem: {},
    listSubscribes_render: false,
}

const AUTH = 'AUTH';
const USERID = 'USERID';
const TOKEN = 'TOKEN';
const ITEMS_RENDER = 'ITEMS_RENDER';
const LIST_RENDER = 'LIST_RENDER';
const LIST_NAME = 'LIST_NAME';
const USER_LIST = 'USER_LIST';
const USER_lIST_ITEM = 'USER_lIST_ITEM';
const FILTERED = 'FILTERED'
const EDIT_ITEM = 'EDIT_ITEM'
const SUBSCRIBES_RENDER = 'SUBSCRIBES_RENDER'

export const rerenderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH:
            return {...state, isAuth: action.payload};
        case USERID:
            return {...state, userId: action.payload};
        case TOKEN:
            return {...state, jwtToken: action.payload};
        case ITEMS_RENDER:
            return {...state, items_render: action.payload};
        case LIST_RENDER:
            return {...state, list_render: action.payload};
        case LIST_NAME:
            return {...state, list_name: action.payload};
        case USER_LIST:
            return {...state, userList: [...state.userList, ...action.payload]};
        case USER_lIST_ITEM:
            return {...state, userListItem: [...state.userListItem, ...action.payload]};
        case FILTERED:
            return {...state, filtered: action.payload};
        case EDIT_ITEM:
            return {...state, editItem: action.payload};
        case SUBSCRIBES_RENDER:
            return {...state, listSubscribes_render: action.payload};
        default:
            return state;
    };
};

export const isAuth = (payload) => ({type: AUTH, payload});
export const userId = (payload) => ({type: USERID, payload});
export const isToken = (payload) => ({type: TOKEN, payload});
export const handleItemsRender = (payload) => ({type: ITEMS_RENDER, payload});
export const handleListRender = (payload) => ({type: LIST_RENDER, payload});
export const handleSubscribesRender = (payload) => ({type: SUBSCRIBES_RENDER, payload});
export const handleListName = (payload) => ({type: LIST_NAME, payload});
export const handleFiltered = (payload) => ({type: FILTERED, payload});

export const addUserLists = (payload) => ({type: USER_LIST, payload});
export const addUserItemList = (payload) => ({type: USER_lIST_ITEM, payload});

export const editItem = (payload) => ({ type: EDIT_ITEM, payload});