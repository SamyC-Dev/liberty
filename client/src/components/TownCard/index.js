import('./townCard.css');


const TownCard = (post) => {
    const { title, photo, postedBy, likes, comments } = post.post;

    return (
        <div className="town_post_card">
            <div className="town_header_card_post">
                <img src={photo} alt="logo" />
            </div>
            <div className="town_body_card_post">
                <div className="town_body_card_top">
                    <img src="https://lesexpertsdurecouvrement.com/wp-content/uploads/2015/11/default-avatar.jpg" alt="" className="img_profil_card" />
                    <p>{postedBy.pseudo}</p>
                </div>
                <div className="town_body_card_down">
                    <p>{title}</p>
                    <p style={{ display: 'flex', alignItem: 'center' }} ><i style={{ color: 'red' }} className="material-icons">favorite</i> {likes.length}</p>
                    <p style={{ display: 'flex', alignItem: 'center' }} ><i className="material-icons">comment</i> {comments.length}</p>
                    <p style={{ float: 'right' }}>il y a 2 jours</p>
                </div>
            </div>
        </div>
    )
};


export default TownCard;
