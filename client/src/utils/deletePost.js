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
                console.log(res)
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



    // fetch(`/deletepost/${postid}`, {
    //     method: "delete",
    //     headers: {
    //         Authorization: "Bearer " + localStorage.getItem("jwt")
    //     }
    // }).then(res => res.json())
    //     .then(result => {
    //         console.log(result)
    //         const newData = data.filter(item => {
    //             return item._id !== result._id
    //         })
    //         setData(newData)
    //     })


}

export default deletePost;
