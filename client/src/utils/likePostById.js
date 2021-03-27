import axios from "axios";
import store from "../store/index";
import { Notyf } from 'notyf';

// Import action
import { setAllPosts, setPostById } from "../store/actions";

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'right',
        y: 'top',
    }
});



const likePostById = (id) => {
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

            store.dispatch(setPostById(result.data));
            store.dispatch(setAllPosts(newData));
            notyf.success('Poste Lické ');

        })
        .catch((error) => {
            notyf.error(error.response.data.error);
        });

}

export default likePostById;