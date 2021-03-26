import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getMyPosts from '../../utils/getMyPosts';
import MyPostCard from '../MyPostCard';
import './profile.css';

const Profile = () => {

    const MyPosts = useSelector((state) => state.myPosts);
    useEffect(() => { getMyPosts() }, []);

    const myPostsInProfile = MyPosts.map(post => {
        return <MyPostCard key={post._id} post={post} />
    });

    return (
        <div className="profile_container">
            <div className="profile_header">
                <div className="profil_header_left_item">
                    <img src="https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PHOTO-PROFIL-MEC-TROPICAL_300x.png?v=1597638270" alt="profil" className="profile_image" />
                </div>
                <div className="profil_header_right">
                    <h4>Pseudo</h4>
                    <div className="profil_header_right_item">
                        <h6>25 likes</h6>
                        <h6>25 abonnés</h6>
                        <h6>25 abonnements</h6>
                    </div>
                    <div >
                        <h5 id="title_bio">Bio</h5>
                        <p>uhrheuhguh roozg_àsz ure_çà zuàujàuze_àg uzçàugiçiuçg iuzçiuçgyru rururur uruhhh hhhhhhhh</p>
                    </div>
                </div>
            </div>
            <h4 style={{ margin: '40px auto', textAlign: 'center' }} >Posts 25</h4>
            <div className="post_gallery">
                {myPostsInProfile}
            </div>
        </div>
    )
};

export default Profile;