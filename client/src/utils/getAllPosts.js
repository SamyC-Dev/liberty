import axios from "axios";
import store from "../store/index";
import { Notyf } from 'notyf';
// Import action 
import { setAllPosts } from "../store/actions";

const notyf = new Notyf({
    duration: 5000,
    position: {
        x: 'right',
        y: 'top',
    }
});


const getAllPots = () => {
    axios
        .get('/allpost')
        .then((res) => {
            if (res.status === 200) {
                const allPosts = res.data.posts;
                store.dispatch(setAllPosts(allPosts));
            }
        })
        .catch((error) => {
            notyf.error(error.response.data.error);
        });
};

export default getAllPots;
