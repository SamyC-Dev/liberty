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
                    <div>
                        <img src="https://i.pinimg.com/236x/79/51/55/7951559b6d74c50ffe5bea83aff0a36b--cool-pictures-yahoo.jpg" alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src="https://st.depositphotos.com/1146092/2514/i/600/depositphotos_25143517-stock-photo-cool-dog.jpg" alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src="https://image.freepik.com/vecteurs-libre/lunettes-vue-lion-cool-retro_68946-257.jpg" alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
};

export default Slideshow;