
import { SIGNINPAGE, HOMEPAGE, DISCONNECTED } from '../actions';


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
        case HOMEPAGE: {
            action.history.push('/');
            break;
        }
        case DISCONNECTED: {
            action.history.push('/');
        }
        // eslint-disable-next-line
        default: {
            next(action);
        }
    }
};
