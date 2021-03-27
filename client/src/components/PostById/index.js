import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getPostById from '../../utils/getPostById';
import('./postbyid.css');

const PostById = () => {

    const { postId } = useParams();
    const Post = useSelector((state) => state.postById);
    useEffect(() => { getPostById(postId) }, []);


    if (Post) {
        return (
            <div className='postById_container'>
                <div className="postById_header">
                    <h2 className='postById__title'>{Post.title}</h2>
                    <img src={Post.photo} alt="image" />
                    <div className="postbyId_header_body">
                        <div className="postById_likeComment_Element">
                            <p ><i style={{ color: 'red' }} className="material-icons">favorite</i>{Post.likes.length}</p>
                            <p ><i className="material-icons">comment</i>{Post.comments.length}</p>
                            <p>il y a 2 jours</p>
                        </div>
                        <img src={Post.postedBy.pic} alt="user photo" />
                        <p className="postById_user">{Post.postedBy.pseudo}</p>
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
