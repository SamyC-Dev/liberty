import axios from "axios";
import store from "../store/index";
import { Notyf } from 'notyf';

// Import action 
import { setPostById } from "../store/actions";

const notyf = new Notyf({
    duration: 5000,
    position: {
        x: 'right',
        y: 'top',
    }
});


const getPostById = (postId) => {

    axios
        .get(`/post/${postId}`)
        .then((res) => {
            if (res.status === 200) {
                const postById = res.data.post;
                store.dispatch(setPostById(postById));
            }
        })
        .catch((error) => {
            notyf.error(error.response.data.error);
        });

};

export default getPostById;
