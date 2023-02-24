
const defaultState = {
    isSwapper: false,

}

const SHOWSWAPPER = 'SHOWSWAPPER';


export const swapperReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SHOWSWAPPER:
            return {...state, isSwapper: action.payload};
        default:
            return state;
    };
};

export const isSwapper = (payload) => ({type: SHOWSWAPPER, payload});

