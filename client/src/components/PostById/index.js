import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getPostById from '../../utils/getPostById';
import likePostById from '../../utils/likePostById';
import unlikePostById from '../../utils/unlikePostById';
import makeComment from '../../utils/makeComment';
import { syncCommentInput } from '../../store/actions';
import Comment from '../Comment';
import('./postbyid.css');

const PostById = () => {

    const dispatch = useDispatch();
    const { postId } = useParams();
    const Post = useSelector((state) => state.postById);
    const User_id = useSelector((state) => state.user._id);
    const commentValue = useSelector((state) => state.comment);
    useEffect(() => { getPostById(postId) }, [postId]);

    if (Post) {
        return (
            <div className='postById_container'>
                <div className="postById_header">
                    <div className="postById_header_top">
                        <h2 className='postById__title'>{Post.title}</h2>
                        <div className="postById_header_user_element">
                            <div className="postById_header_user_element_left">
                                <img src={Post.postedBy.pic} alt="user" />
                                <p className="postById_user">{Post.postedBy.pseudo}</p>
                            </div>
                            <div className="postById_header_user_element_right">
                                <p>il y a 2 jours</p>
                            </div>
                        </div>
                        <img src={Post.photo} alt="post" />
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
                                            unlikePostById(Post._id)
                                        }}
                                    >favorite</i>
                                    :
                                    <i
                                        style={{ color: 'red' }}
                                        className="material-icons"
                                        onClick={() => {
                                            likePostById(Post._id)
                                        }}
                                    >favorite_border</i>
                                }{Post.likes.length}

                            </p>
                        </div>
                    </div>
                    <p className="postById_message">
                        {Post.message}
                    </p>
                </div>
                <div className="postById_Comment_container">
                    <h4>Commentaires {Post.comments.length}</h4>
                    <div className="comment_form">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            makeComment(Post._id)
                        }}>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="Ajouter un commentaire"
                                    value={commentValue}
                                    onChange={(e) => dispatch(syncCommentInput(e.target.value))}
                                />
                            </div>

                        </form>
                    </div>
                    <div className="postById_Comment">
                        {
                            Post.comments.map(comment => {
                                return (
                                    <Comment key={comment._id} {...comment} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    } else {
        return 'loading'
    }


};

export default PostById;
