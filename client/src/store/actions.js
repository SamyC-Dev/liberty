export const SYNC_SIGNUP_PSEUDO = "actions/SYNC_SIGNUP_PSEUDO";
export const SYNC_SIGNUP_EMAIL = "actions/SYNC_SIGNUP_EMAIL";
export const SYNC_SIGNUP_PASSWORD = "actions/SYNC_SIGNUP_PASSWORD";
export const SIGNUP = "actions/SIGNUP";

// SignUp Actions
export const syncSignupPseudo = (pseudo) => ({ type: SYNC_SIGNUP_PSEUDO, pseudo });
export const syncSignupEmail = (email) => ({ type: SYNC_SIGNUP_EMAIL, email });
export const syncSignupPassword = (password) => ({ type: SYNC_SIGNUP_PASSWORD, password });
export const signUp = (history) => ({ type: SIGNUP, history });
