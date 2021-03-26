import { useSelector } from 'react-redux';
import('./mypostscard.css');


const MyPostCard = (post) => {
    const User_id = useSelector((state) => state.user._id);
    const { title, photo, postedBy, likes, comments } = post.post;

    return (
        <div className="my_post_card">
            <div className="my_header_card_post">
                <img src={photo} alt="logo" />
            </div>
            <div className="my_body_card_post">
                <div className="my_body_card_top">
                    <img src="https://lesexpertsdurecouvrement.com/wp-content/uploads/2015/11/default-avatar.jpg" alt="" className="img_profil_card" />
                    <p>{postedBy.pseudo}</p>
                </div>
                <div className="my_body_card_down">
                    <p>{title}</p>
                    <p style={{ display: 'flex', alignItem: 'center' }} ><i style={{ color: 'red' }} className="material-icons">favorite_border</i> {likes.length}</p>
                    <p style={{ display: 'flex', alignItem: 'center' }} ><i className="material-icons">comment</i> {comments.length}</p>
                    <p style={{ float: 'right' }}>il y a 2 jours</p>
                </div>
            </div>
        </div>
    )
};


export default MyPostCard;