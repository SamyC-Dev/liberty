import('./postCard.css');


const PostCard = () => {
    return (
        <div className="post_card">
            <div className="header_card_post">
                <img src={image1} alt="logo" />
            </div>
            <div className="body_card_post">
                <div className="body_card_top">
                    <img src="https://lesexpertsdurecouvrement.com/wp-content/uploads/2015/11/default-avatar.jpg" alt="" className="img_profil_card" />
                    <p>titre du postshhh hhhhh</p>
                </div>
                <div className="body_card_down">
                    <p>pseudo de fou</p>
                    <p>Vue: 36</p>
                    <p>il y a 2 jours</p>
                </div>
            </div>
        </div>
    )
};
























const image1 = "data:image/jpeg;base64,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"

export default PostCard;
