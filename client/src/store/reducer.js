// Import action
import {
    SYNC_SIGNUP_PSEUDO,
    SYNC_SIGNUP_EMAIL,
    SYNC_SIGNUP_PASSWORD,
} from "./actions";

// State initial
const initialState = {
    user: {},
    signupPseudo: '',
    signupEmail: '',
    signupPassword: '',
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        // SignUp reducer
        case SYNC_SIGNUP_PSEUDO: {
            return {
                ...state,
                signupPseudo: action.pseudo,
            };
        }
        case SYNC_SIGNUP_EMAIL: {
            return {
                ...state,
                signupEmail: action.email,
            };
        }
        case SYNC_SIGNUP_PASSWORD: {
            return {
                ...state,
                signupPassword: action.password,
            };
        }


        default: {
            return state;
        };
    }
};

export default reducer;

