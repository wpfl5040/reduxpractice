import * as types from '../actions/ActionTypes';

const initState = {
    number: 0
};

export default function counter(state = initState, action) {
    // if(typeof state == 'undefined') {
    //     return initState;
    // }

    switch (action.types) {
        case types.INCREMENT: return { ...state, number: state.number + 1 };
        case types.DECREMENT: return { ...state, number: state.number - 1 };
        
        default: return state;
    }
}
