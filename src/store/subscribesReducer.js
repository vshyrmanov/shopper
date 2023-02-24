
const defaultState = {
    listRender: false,
    isLoader: false,

}

const LIST_RENDER = 'LIST_RENDER';
const IS_LOADER = 'IS_LOADER';


export const subscribesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LIST_RENDER:
            return {...state, listRender: action.payload};
        case IS_LOADER:
            return {...state, isLoader: action.payload};
        default:
            return state;
    };
};

export const isRenderList = (payload) => ({type: LIST_RENDER, payload});
export const isLoader = (payload) => ({type: IS_LOADER, payload});