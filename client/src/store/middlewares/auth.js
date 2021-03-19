import axios from 'axios';
import { Notyf } from 'notyf';

// Import actions
import { SIGNUP, homePage, resetLoginInput } from '../actions';

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
                        store.dispatch(resetLoginInput());
                        store.dispatch(homePage(action.history));
                        notyf.success(response.data.message);
                    }
                })
                .catch((error) => {
                    notyf.error(`Authentification échoué ! ${error.response.data.error}`);
                    console.log(error.response.data.error);
                });
            return;
        }
        default: {
            next(action);
        }
    }
};