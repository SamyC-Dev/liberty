// Import action
import {
    SYNC_SIGNUP_PSEUDO,
    SYNC_SIGNUP_EMAIL,
    SYNC_SIGNUP_PASSWORD,
    RESET_SIGNUP_INPUT,
    SYNC_SIGNIN_EMAIL,
    SYNC_SIGNIN_PASSWORD,
    RESET_LOGIN_INPUT,
    SET_USER,
} from "./actions";

// State initial
const initialState = {
    user: {},
    signupPseudo: '',
    signupEmail: '',
    signupPassword: '',
    signinEmail: '',
    signinPassword: '',
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
        case RESET_SIGNUP_INPUT: {
            return {
                ...state,
                signupPseudo: "",
                signupEmail: "",
                signupPassword: "",
            };
        }

        // SignIn reducer
        case SYNC_SIGNIN_EMAIL: {
            return {
                ...state,
                signinEmail: action.email,
            };
        }
        case SYNC_SIGNIN_PASSWORD: {
            return {
                ...state,
                signinPassword: action.password,
            };
        }
        case RESET_LOGIN_INPUT: {
            return {
                ...state,
                signinEmail: "",
                signinPassword: "",
            };
        }

        // User reducer
        case SET_USER: {
            return {
                ...state,
                user: action.user,
            };
        }

        default: {
            return state;
        };
    }
};

export default reducer;

