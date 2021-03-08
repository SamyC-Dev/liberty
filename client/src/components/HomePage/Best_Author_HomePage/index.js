import Slideshow from '../../SlideShow/Slide'
import('./best_author.css');

const BestAuthor = () => {


    return (
        <>
            <div className="best_author_homepage">
                <h4>Les créateurs les plus productifs</h4>
                <p>Lorem ipsum, dolor sit amet consectetur.</p>
                <div className="best_authors_container">
                    <Slideshow />
                </div>
            </div>
        </>
    )
};

export default BestAuthor;