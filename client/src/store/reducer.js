// Import action
import {
    //TEST
} from "./actions";

// State initial
const initialState = {
    //user: {},
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        // case TEST: {
        //     return {
        //         ...state,
        //         user: action.user,
        //     };
        // }

        default: {
            return state;
        }
    }
};

export default reducer;

