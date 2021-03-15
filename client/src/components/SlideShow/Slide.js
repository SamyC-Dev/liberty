import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slide.css';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div className="slide_card">
                        <img src="https://image.freepik.com/vecteurs-libre/lunettes-vue-lion-cool-retro_68946-257.jpg" alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="slide_card">
                        <img src="https://st.depositphotos.com/1146092/2514/i/600/depositphotos_25143517-stock-photo-cool-dog.jpg" alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="slide_card">
                        <img src="https://image.freepik.com/vecteurs-libre/lunettes-vue-lion-cool-retro_68946-257.jpg" alt="img3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="slide_card">
                        <img src="https://image.freepik.com/vecteurs-libre/lunettes-vue-lion-cool-retro_68946-257.jpg" alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
};

export default Slideshow;