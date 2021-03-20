import axios from "axios";
import store from "../store/index";
import { Notyf } from 'notyf';

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

    fetch("https://api.cloudinary.com/v1_1/libertyproject/image/upload", {
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
                        console.log(response)
                        history.push('/thetown');
                        notyf.success('Poste crée avec succés');
                    }
                })
                .catch((error) => {
                    notyf.error(error.response.data.error);
                });

        })
        .catch(err => {
            console.log('Probleme avec cloudinary')
        })

    // axios({
    //     method: 'post',
    //     url: 'https://api.cloudinary.com/v1_1/libertyproject/image/upload',
    //     data,
    // })
    //     .then((response) => {
    //         if (response.status === 200) {
    //             console.log(response)
    //             const url = response.data.url;

    //             axios({
    //                 method: 'post',
    //                 url: '/createpost',
    //                 data: {
    //                     title: cleanPostTitle,
    //                     message: cleanPostMessage,
    //                     photo: url,
    //                 },
    //             })
    //                 .then((response) => {
    //                     if (response.status === 200) {
    //                         console.log(response)
    //                         history.push('/thetown');
    //                         // notyf.success(response.data.message);
    //                     }
    //                 })
    //                 .catch((error) => {
    //                     notyf.error(error.response.data.error);
    //                 });

    //             notyf.success(response.data.message);
    //         }
    //     })
    //     .catch((error) => {
    //         notyf.error(`Création depost échoué probleme avec cloudinary`);
    //         // console.log(error.response.data.error);
    //     });


};

export default createNewPost;