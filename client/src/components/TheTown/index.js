import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getAllPots from '../../utils/getAllPosts';
import TownCard from '../TownCard';


import('./town.css');


const Town = () => {

    const AllPosts = useSelector((state) => state.allPosts);
    useEffect(() => { getAllPots() }, []);


    const AllPostsTown = AllPosts.map(post => {
        return <TownCard key={post._id} post={post} />

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
