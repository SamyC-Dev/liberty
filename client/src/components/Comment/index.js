
import('./comment.css');

const Comment = (comment) => {
    const { text, postedBy } = comment;

    return (
        <div className="comment">
            <div className="comment_header">
                <img src={postedBy.pic} alt="user" />
                <h5>{postedBy.pseudo}</h5>
            </div >
            <div className="comment_body">
                <p>{text}</p>
            </div>
            <div className="comment_date">
                <p>il y a 2 jours</p>
            </div>
        </div>
    )
};

export default Comment;
