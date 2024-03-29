import axios from "axios";
import store from "../store/index";
import { Notyf } from 'notyf';

// Import action
import { resetCreatePostInput } from '../store/actions';

import { CLOUDINARY_API_UPLOAD } from '../utils/constants';

const notyf = new Notyf({
    duration: 5000,
    position: {
        x: 'right',
        y: 'top',
    }
});

const createNewPost = (history) => {

    const cleanPostTitle = store.getState().createPostTitle.trim();
    const cleanPostMessage = store.getState().createPostMessage.trim();
    const cleanPostImage = store.getState().createPostImage;

    const data = new FormData()
    data.append("file", cleanPostImage)
    data.append("upload_preset", "liberty")
    data.append("cloud_name", "libertyproject")

    if (!cleanPostImage) {
        axios({
            method: 'post',
            url: '/createpost',
            data: {
                title: cleanPostTitle,
                message: cleanPostMessage,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    store.dispatch(resetCreatePostInput());
                    history.push('/thetown');
                    notyf.success('Poste crée avec succés');
                }
            })
            .catch((error) => {
                notyf.error(error.response.data.error);
            });
    } else {
        fetch(CLOUDINARY_API_UPLOAD, {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                const url = data.url;
                axios({
                    method: 'post',
                    url: '/createpost',
                    data: {
                        title: cleanPostTitle,
                        message: cleanPostMessage,
                        photo: url,
                    },
                })
                    .then((response) => {
                        if (response.status === 200) {
                            store.dispatch(resetCreatePostInput());
                            history.push('/thetown');
                            notyf.success('Poste crée avec succés');
                        }
                    })
                    .catch((error) => {
                        notyf.error(error.response.data.error);
                    });

            })
            .catch(err => {
                notyf.error('Probleme avec cloudinary')
            })
    }



};

export default createNewPost;