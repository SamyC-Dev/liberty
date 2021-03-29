import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import likePost from '../../utils/likePost';
import unlikePosts from '../../utils/unlikePosts';
import deletePost from '../../utils/deletePost';
import('./townCard.css');


const TownCard = (post) => {

    const history = useHistory();
    const User_id = useSelector((state) => state.user._id);
    const { title, photo, postedBy, likes, comments, _id } = post.post;


    return (
        <div className="town_post_card">
            <div className="town_header_card_post">
                <img
                    src={photo}
                    alt="logo"
                    onClick={() => history.push(`/post/${_id}`)}
                />
                {(postedBy._id == User_id) && <i
                    className="material-icons"
                    onClick={() => deletePost(_id)}
                >delete</i>}

            </div>
            <div className="town_body_card_post">
                <div className="town_body_card_top">
                    <img src="https://lesexpertsdurecouvrement.com/wp-content/uploads/2015/11/default-avatar.jpg" alt="" className="img_profil_card" />
                    <p>{postedBy.pseudo}</p>
                </div>
                <div className="town_body_card_down">
                    <p>{title}</p>
                    <p style={{ display: 'flex', alignItem: 'center' }} >

                        {likes.includes(User_id)
                            ?
                            <i
                                style={{ color: 'red' }}
                                className="material-icons"
                                onClick={() => { unlikePosts(_id) }}
                            >favorite</i>
                            :
                            <i
                                style={{ color: 'red' }}
                                className="material-icons"
                                onClick={() => { likePost(_id) }}
                            >favorite_border</i>
                        }
                        {likes.length}
                    </p>
                    <p style={{ display: 'flex', alignItem: 'center' }} ><i className="material-icons">comment</i> {comments.length}</p>
                    <p style={{ float: 'right' }}>il y a 2 jours</p>
                </div>
            </div>
        </div>
    )
};


export default TownCard;
