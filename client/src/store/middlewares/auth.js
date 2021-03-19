import axios from 'axios';
import { Notyf } from 'notyf';

// Import actions
import { SIGNUP, signInPage, resetSignUpInput, homePage, LOGIN, resetLoginInput, setUser } from '../actions';

const notyf = new Notyf({
    duration: 5000,
    position: {
        x: 'right',
        y: 'top',
    }
});
// eslint-disable-next-line
export default (store) => (next) => (action) => {

    const cleanPseudo = store.getState().signupPseudo.trim();
    const cleanEmail = store.getState().signupEmail.trim();
    const cleanPassword = store.getState().signupPassword;

    const cleanSignInEmail = store.getState().signinEmail.trim();
    const cleanSignInPassword = store.getState().signinPassword;

    switch (action.type) {
        case SIGNUP: {

            if (cleanPseudo === '' || cleanEmail === '' || cleanPassword === '') {
                notyf.error(`Authentification échoué ! Veuiller remplir tous les champs`);
                console.log('error veuillez remplir tous les champs')
                return false
            }

            if (cleanPseudo.length < 2) {
                notyf.error(`Authentification échoué ! Votre pseudo doit contenir au mois 2 caracteres`);
                console.log('error votre pseudo doit contenir au mois 2 caracteres')
                return false
            }

            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(cleanEmail)) {
                notyf.error(`Authentification échoué ! Email n'est pas au bon format`);
                return
            }

            if (cleanPassword.length < 6) {
                notyf.error(`Authentification échoué ! Votre mdp doit contenir au moins 6 caracteres`);
                console.log('error votre mdp doit contenir au moins 6 caracteres')
                return false
            }


            axios({
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                url: '/signup',
                data: {
                    pseudo: cleanPseudo,
                    email: cleanEmail,
                    password: cleanPassword,
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response)
                        store.dispatch(resetSignUpInput());
                        store.dispatch(signInPage(action.history));
                        notyf.success(response.data.message);
                    }
                })
                .catch((error) => {
                    notyf.error(`Authentification échoué ! ${error.response.data.error}`);
                    console.log(error.response.data.error);
                });
            return;
        };

        case LOGIN: {

            if (cleanSignInEmail === '' || cleanSignInPassword === '') {
                notyf.error(`Connection échoué ! Veuiller remplir tous les champs`);
                return false
            }

            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(cleanSignInEmail)) {
                notyf.error(`Connection échoué ! Email n'est pas au bon format`);
                return
            }

            if (cleanSignInPassword.length < 6) {
                notyf.error(`Connection échoué ! Votre mdp doit contenir au moins 6 caracteres`);
                return false
            }

            axios({
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                url: '/signin',
                data: {
                    email: cleanSignInEmail,
                    password: cleanSignInPassword,
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response);
                        localStorage.setItem("jwt", response.data.token);
                        localStorage.setItem("user", JSON.stringify(response.data.user));
                        store.dispatch(setUser(response.data.user));
                        store.dispatch(resetLoginInput());
                        store.dispatch(homePage(action.history));
                        notyf.success(`Bienvenue ${response.data.user.pseudo}`);
                    }
                })
                .catch((error) => {
                    store.dispatch(resetLoginInput());
                    notyf.error(`Connection échoué ! ${error.response.data.error}`);
                });
            return;
        }

        default: {
            next(action);
        }
    }
};