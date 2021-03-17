// Import action
import {
    SYNC_SIGNUP_PSEUDO,
    SYNC_SIGNUP_EMAIL,
    SYNC_SIGNUP_PASSWORD,
    RESET_LOGIN_INPUT,
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
        case RESET_LOGIN_INPUT: {
            return {
                ...state,
                signupPseudo: "",
                signupEmail: "",
                signupPassword: "",
            };
        }


        default: {
            return state;
        };
    }
};

export default reducer;

