import PostCard from '../../Post_Card';

import './best_posts.css';

const BestPosts = () => {

    return (
        <div className="best_posts_homepage">
            <h4>Top 3 des postes les plus likés</h4>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <div className="bestposts_container">
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
};

export default BestPosts;