export const SYNC_SIGNUP_PSEUDO = "actions/SYNC_SIGNUP_PSEUDO";
export const SYNC_SIGNUP_EMAIL = "actions/SYNC_SIGNUP_EMAIL";
export const SYNC_SIGNUP_PASSWORD = "actions/SYNC_SIGNUP_PASSWORD";
export const SIGNUP = "actions/SIGNUP";
export const RESET_SIGNUP_INPUT = "actions/RESET_SIGNUP_INPUT";

export const SYNC_SIGNIN_EMAIL = "actions/SYNC_SIGNIN_EMAIL";
export const SYNC_SIGNIN_PASSWORD = "actions/SYNC_SIGNIN_PASSWORD";
export const LOGIN = "actions/LOGIN";
export const RESET_LOGIN_INPUT = "actions/RESET_LOGIN_INPUT";

export const SIGNINPAGE = "actions/SIGNINPAGE";
export const HOMEPAGE = "actions/HOMEPAGE";
export const DISCONNECTED = "actions/DISCONNECTED";


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


// Routes Actions
export const signInPage = (history) => ({ type: SIGNINPAGE, history });
export const homePage = (history) => ({ type: HOMEPAGE, history });
export const disconnected = (history) => ({ type: DISCONNECTED, history });
