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

const deletePost = (postid) => {

    const allPosts = store.getState().allPosts;

    axios
        .delete(`/deletepost/${postid}`)
        .then((res) => {
            if (res.status === 200) {
                const newData = allPosts.filter(item => {
                    return item._id !== res.data._id
                })
                store.dispatch(setAllPosts(newData));
                notyf.success('Poste supprimé');
            }
        })
        .catch((error) => {
            notyf.error(error.response.data.error);
        });

}

export default deletePost;
