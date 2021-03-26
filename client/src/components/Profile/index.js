import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getMyPosts from '../../utils/getMyPosts';
import MyPostCard from '../MyPostCard';
import './profile.css';

const Profile = () => {

    const MyPosts = useSelector((state) => state.myPosts);
    const User = useSelector((state) => state.user);

    useEffect(() => { getMyPosts() }, []);

    const myPostsInProfile = MyPosts.map(post => {
        return <MyPostCard key={post._id} post={post} />
    });

    let countTotalHeart = 0;
    MyPosts.forEach(post => {
        countTotalHeart = countTotalHeart + post.likes.length
        return countTotalHeart
    })

    return (
        <div className="profile_container">
            <div className="profile_header">
                <div className="profil_header_left_item">
                    <img src="https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PHOTO-PROFIL-MEC-TROPICAL_300x.png?v=1597638270" alt="profil" className="profile_image" />
                </div>
                <div className="profil_header_right">
                    <h4>{User.pseudo}</h4>
                    <div className="profil_header_right_item">
                        <h6>{countTotalHeart} likes</h6>
                        <h6>{User.followers.length} abonnés</h6>
                        <h6>{User.following.length} abonnements</h6>
                    </div>
                    <div >
                        <h5 id="title_bio">Bio</h5>
                        <p>{User.bio}</p>
                    </div>
                </div>
            </div>
            <h4 style={{ margin: '40px auto', textAlign: 'center' }} >{MyPosts.length > 1 ? `${MyPosts.length} postes` : `${MyPosts.length} poste`}</h4>
            <div className="post_gallery">
                {myPostsInProfile}
            </div>
        </div>
    )
};

export default Profile;