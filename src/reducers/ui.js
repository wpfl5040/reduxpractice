import * as types from '../actions/ActionTypes';

const initState = {
    color: [255, 255, 255]
};

export default function ui(state = initState, action) {
    if(action.type === types.SET_COLOR) {
        return {
            color: action.color
        };
    }else {
        return state;
    }
}
