import axios from 'axios';

// Import actions
import { SIGNUP, homePage } from '../actions';

// Import constant
// import { API_URL } from '../../utils/constants';

export default (store) => (next) => (action) => {

    const cleanPseudo = store.getState().signupPseudo.trim();
    const cleanEmail = store.getState().signupEmail.trim();
    const cleanPassword = store.getState().signupPassword;

    console.log(cleanPseudo, cleanEmail, cleanPassword)

    switch (action.type) {
        case SIGNUP: {

            if (cleanPseudo === '' || cleanEmail === '' || cleanPassword === '') {
                // notyf.error(`Authentification échoué ! Veuillez remplir tous les champs`);
                console.log('error veuillez remplir tous les champs')
                return false
            }

            if (cleanPseudo.length < 2) {
                // notyf.error(`Authentification échoué ! Veuillez remplir tous les champs`);
                console.log('error votre pseudo doit contenir au mois 2 caracteres')
                return false
            }

            if (cleanPassword.length < 6) {
                // notyf.error(`Authentification échoué ! Veuillez remplir tous les champs`);
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
                        store.dispatch(homePage(action.history));

                    }
                })
                .catch((error) => {
                    // notyf.error('Authentification échoué !');
                    console.trace(error);
                });
            return;
        }
        default: {
            next(action);
        }
    }
};