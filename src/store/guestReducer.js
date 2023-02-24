
const defaultState = {
    isGuest: false,
    lists: [],
    listItem: [],
}

const IS_GUEST = 'IS_GUEST';
const ADD_LIST = 'ADD_LIST';
const REMOVE_LIST = 'REMOVE_LIST';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CHECK_DONE = 'CHECK_DONE';

export const guestReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_GUEST:
            return {...state, isGuest: action.payload};
        case ADD_LIST:
            return {...state, lists: [...state.lists, action.payload]};
        case REMOVE_LIST:
            return {...state, lists: state.lists.filter(list => list._id !== action.payload)};
        case ADD_ITEM:
            return {...state, listItem: [...state.listItem, action.payload]};
        case REMOVE_ITEM:
            return {...state, listItem: state.listItem.filter(list => list._id !== action.payload)};
        case CHECK_DONE:
            return {...state, listItem: action.payload};
        default:
            return state;
    };
};

export const isGuest = (payload) => ({type: IS_GUEST, payload});
export const addList = (payload) => ({type: ADD_LIST, payload});
export const addItem = (payload) => ({type: ADD_ITEM, payload});
export const removeList = (payload) => ({type: REMOVE_LIST, payload});
export const removeItem = (payload) => ({type: REMOVE_ITEM, payload});
export const checkDone = (payload) => ({type: CHECK_DONE, payload});

