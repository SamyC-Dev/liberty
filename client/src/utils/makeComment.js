import axios from "axios";
import store from "../store/index";
import { Notyf } from 'notyf';

// Import action
import { setAllPosts, setPostById, syncCommentInput } from "../store/actions";

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'right',
        y: 'top',
    }
});

const makeComment = (postId) => {

    const data = store.getState().allPosts;
    const comment = store.getState().comment;

    if (comment === '') {
        notyf.error(`Un commentaire ne peut etre vide merci`);
        return false
    }

    axios({
        method: 'put',
        url: '/comment',
        data: {
            postId,
            text: comment,
        },
    })
        .then((result) => {
            if (result.status === 200) {
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                store.dispatch(syncCommentInput(""));
                store.dispatch(setPostById(result.data));
                store.dispatch(setAllPosts(newData))
                notyf.success('Commentaire posté avec succés');
            }
        })
        .catch((error) => {
            notyf.error(error.result.data.error);
        });

};

export default makeComment;