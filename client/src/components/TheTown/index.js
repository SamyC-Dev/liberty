import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import getAllPots from '../../utils/getAllPosts';

import('./town.css');


const Town = () => {

    const AllPosts = useSelector((state) => state.allPosts);
    console.log("mes posts", AllPosts)
    useEffect(() => { getAllPots() }, []);

    const AllPostsTown = AllPosts.map(post => {
        return (<div key={post._id} className="town_gallery_item">
            <img src={post.photo} alt="post" />
        </div>)
    });

    return (
        <div className="town_container">
            <h2>Le Mur</h2>
            <div className="town_gallery">
                {AllPostsTown}
            </div>
        </div>
    )
};

export default Town;
