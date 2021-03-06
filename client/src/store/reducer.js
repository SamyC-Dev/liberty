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
    DISCONNECTED,
    SYNC_CREATEPOST_TITLE,
    SYNC_CREATEPOST_MESSAGE,
    SYNC_CREATEPOST_IMAGE,
    RESET_CREATE_NEW_POST_INPUT,
    SET_ALL_POSTS,
    SET_MY_POSTS,
    SET_POST_BY_ID,
    SYNC_COMMENT_INPUT,
} from "./actions";

// State initial
const initialState = {
    user: '',
    signupPseudo: '',
    signupEmail: '',
    signupPassword: '',
    signinEmail: '',
    signinPassword: '',
    createPostTitle: '',
    createPostMessage: '',
    createPostImage: '',
    allPosts: [],
    myPosts: [],
    postById: '',
    comment: '',
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

        // Post reducer
        case SYNC_CREATEPOST_TITLE: {
            return {
                ...state,
                createPostTitle: action.title,
            };
        }
        case SYNC_CREATEPOST_MESSAGE: {
            return {
                ...state,
                createPostMessage: action.message,
            };
        }
        case SYNC_CREATEPOST_IMAGE: {
            return {
                ...state,
                createPostImage: action.image,
            };
        }
        case RESET_CREATE_NEW_POST_INPUT: {
            return {
                ...state,
                createPostTitle: '',
                createPostMessage: '',
                createPostImage: '',
            };
        }
        case SET_ALL_POSTS: {
            return {
                ...state,
                allPosts: action.allPosts,
            };
        }
        case SET_MY_POSTS: {
            return {
                ...state,
                myPosts: action.posts,
            };
        }
        case SET_POST_BY_ID: {
            return {
                ...state,
                postById: action.post,
            };
        }

        // Comment reducer
        case SYNC_COMMENT_INPUT: {
            return {
                ...state,
                comment: action.comment
            };
        }


        // Disconnected
        case DISCONNECTED: {
            localStorage.clear()
            return {
                ...state,
                user: '',
                allPosts: [],
                myPosts: [],
                postById: '',
            };
        }

        default: {
            return state;
        };
    }
};

export default reducer;

