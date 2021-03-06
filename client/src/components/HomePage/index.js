import HeaderHomePage from './Header_HomePage';
import BestPosts from './Best_Posts_HomePage';
import BestAuthor from './Best_Author_HomePage';
import StartLiberty from './Start_Liberty_HomePage';

import "./homePage.css"


const HomePage = () => {
    return (
        <div className="homePage_container">
            <HeaderHomePage />
            <BestPosts />
            <BestAuthor />
            <StartLiberty />
        </div>
    )
};

export default HomePage;
