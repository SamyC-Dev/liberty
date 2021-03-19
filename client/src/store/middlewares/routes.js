
import { SIGNINPAGE, DISCONNECTED } from '../actions';


// const notyf = new Notyf({
//     duration: 4000,
//     position: {
//         x: 'center',
//         y: 'top',
//     }
// });

// eslint-disable-next-line
export default (store) => (next) => (action) => {
    switch (action.type) {
        case SIGNINPAGE: {
            action.history.push('/signin');
            break;
        }
        case DISCONNECTED: {
            action.history.push('/');
            // notyf.success('A bientôt ...');
        }
        // eslint-disable-next-line
        default: {
            next(action);
        }
    }
};
