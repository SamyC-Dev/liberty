import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getPostById from '../../utils/getPostById';
import likePost from '../../utils/likePost';
import unlikePosts from '../../utils/unlikePosts';
import('./postbyid.css');

const PostById = () => {

    const { postId } = useParams();
    const Post = useSelector((state) => state.postById);
    const User_id = useSelector((state) => state.user._id);
    useEffect(() => { getPostById(postId) }, []);


    if (Post) {
        return (
            <div className='postById_container'>
                <div className="postById_header">
                    <div className="postById_header_top">
                        <h2 className='postById__title'>{Post.title}</h2>
                        <div className="postById_header_user_element">
                            <div className="postById_header_user_element_left">
                                <img src={Post.postedBy.pic} alt="user photo" />
                                <p className="postById_user">{Post.postedBy.pseudo}</p>
                            </div>
                            <div className="postById_header_user_element_right">
                                <p>il y a 2 jours</p>
                            </div>

                        </div>
                        <img src={Post.photo} alt="image" />
                    </div>
                    <div className="postbyId_header_body">
                        <div className="postById_likeComment_Element">
                            <p ><i className="material-icons">comment</i>{Post.comments.length}</p>
                            <p >

                                {Post.likes.includes(User_id)
                                    ?
                                    <i
                                        style={{ color: 'red' }}
                                        className="material-icons"
                                        onClick={() => {
                                            unlikePosts(Post._id)
                                            document.location.reload();
                                        }}
                                    >favorite</i>
                                    :
                                    <i
                                        style={{ color: 'red' }}
                                        className="material-icons"
                                        onClick={() => {
                                            likePost(Post._id)
                                            document.location.reload();
                                        }}
                                    >favorite_border</i>
                                }{Post.likes.length}

                            </p>
                        </div>
                    </div>
                    <p className="postById_message"></p>
                </div>
                <div className="postById_Comment_container">
                    <h4>Commentaires {Post.comments.length}</h4>
                </div>
            </div>
        )
    } else {
        return 'loading'
    }


};

export default PostById;
