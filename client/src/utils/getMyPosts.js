import axios from "axios";
import store from "../store/index";
import { Notyf } from 'notyf';

// Import action 
import { setMyPosts } from "../store/actions";

const notyf = new Notyf({
    duration: 5000,
    position: {
        x: 'right',
        y: 'top',
    }
});


const getMyPosts = () => {
    axios
        .get('/mypost')
        .then((res) => {
            if (res.status === 200) {
                const myPosts = res.data.mypost;
                store.dispatch(setMyPosts(myPosts));
            }
        })
        .catch((error) => {
            notyf.error(error.response.data.error);
        });
};

export default getMyPosts;
