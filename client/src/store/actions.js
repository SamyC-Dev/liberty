export const SYNC_SIGNUP_PSEUDO = "actions/SYNC_SIGNUP_PSEUDO";
export const SYNC_SIGNUP_EMAIL = "actions/SYNC_SIGNUP_EMAIL";
export const SYNC_SIGNUP_PASSWORD = "actions/SYNC_SIGNUP_PASSWORD";
export const SIGNUP = "actions/SIGNUP";
export const RESET_SIGNUP_INPUT = "actions/RESET_SIGNUP_INPUT";
export const SYNC_SIGNIN_EMAIL = "actions/SYNC_SIGNIN_EMAIL";
export const SYNC_SIGNIN_PASSWORD = "actions/SYNC_SIGNIN_PASSWORD";
export const LOGIN = "actions/LOGIN";
export const RESET_LOGIN_INPUT = "actions/RESET_LOGIN_INPUT";
export const SET_USER = "actions/SET_USER";
export const SIGNINPAGE = "actions/SIGNINPAGE";
export const HOMEPAGE = "actions/HOMEPAGE";
export const DISCONNECTED = "actions/DISCONNECTED";
export const SYNC_CREATEPOST_TITLE = "actions/SYNC_CREATEPOST_TITLE";
export const SYNC_CREATEPOST_MESSAGE = "actions/SYNC_CREATEPOST_MESSAGE";
export const SYNC_CREATEPOST_IMAGE = "actions/SYNC_CREATEPOST_IMAGE";
export const CREATE_NEW_POST = "actions/CREATE_NEW_POST";
export const RESET_CREATE_NEW_POST_INPUT = "actions/RESET_CREATE_NEW_POST_INPUT";
export const SET_ALL_POSTS = "actions/SET_ALL_POSTS";
export const SET_MY_POSTS = "actions/SET_MY_POSTS";
export const SET_POST_BY_ID = "actions/SET_POST_BY_ID";
export const SYNC_COMMENT_INPUT = "actions/SYNC_COMMENT_INPUT";


// Sync Comment Input
export const syncCommentInput = (comment) => ({ type: SYNC_COMMENT_INPUT, comment });

// setPostById action
export const setPostById = (post) => ({ type: SET_POST_BY_ID, post });

// SetMyPost in my profile action
export const setMyPosts = (posts) => ({ type: SET_MY_POSTS, posts });

// SetAllPosts actions
export const setAllPosts = (allPosts) => ({ type: SET_ALL_POSTS, allPosts });

// Create post actions
export const syncCreatePostTitle = (title) => ({ type: SYNC_CREATEPOST_TITLE, title });
export const syncCreatePostMessage = (message) => ({ type: SYNC_CREATEPOST_MESSAGE, message });
export const syncCreatePostImage = (image) => ({ type: SYNC_CREATEPOST_IMAGE, image });
export const resetCreatePostInput = () => ({ type: RESET_CREATE_NEW_POST_INPUT });
// export const CreateNewPost = (post) => ({ type: SYNC_CREATEPOST_IMAGE, post });

// SignUp Actions
export const syncSignupPseudo = (pseudo) => ({ type: SYNC_SIGNUP_PSEUDO, pseudo });
export const syncSignupEmail = (email) => ({ type: SYNC_SIGNUP_EMAIL, email });
export const syncSignupPassword = (password) => ({ type: SYNC_SIGNUP_PASSWORD, password });
export const signUp = (history) => ({ type: SIGNUP, history });

// Reset Signup input
export const resetSignUpInput = () => ({ type: RESET_SIGNUP_INPUT });

// SignIn Actions
export const syncSignInEmail = (email) => ({ type: SYNC_SIGNIN_EMAIL, email });
export const syncSignInPassword = (password) => ({ type: SYNC_SIGNIN_PASSWORD, password });
export const login = (history) => ({ type: LOGIN, history });

// Reset SignIn input
export const resetLoginInput = () => ({ type: RESET_LOGIN_INPUT });

// action set Set User
export const setUser = (user) => ({ type: SET_USER, user });

// Action Disconnected: false
export const disconnected = (history) => ({ type: DISCONNECTED, history });

// Routes Actions
export const signInPage = (history) => ({ type: SIGNINPAGE, history });
export const homePage = (history) => ({ type: HOMEPAGE, history });
