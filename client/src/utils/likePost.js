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


const likePost = (id) => {
    const allPosts = store.getState().allPosts;
    axios({
        method: 'put',
        url: '/like',
        data: {
            postId: id,
        },

    })
        .then((result) => {

            const newData = allPosts.map(post => {

                if (post._id === result.data._id) {
                    return result.data
                } else {
                    return post
                }
            })
            store.dispatch(setAllPosts(newData));
            notyf.success('Poste Lické ');

        })
        .catch((error) => {
            notyf.error(error.response.data.error);
        });

}

export default likePost;