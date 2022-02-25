import React, {useState} from "react";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import {Data} from './Data';

function Slider({slides}){

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current+1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current-1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <div className="sliderWrapper">
            <FaAngleLeft className='left' onClick={prevSlide} />
            <FaAngleRight className='right' onClick={nextSlide} />
            {Data.map((slide,index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt={slide.title} className='image' />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Slider;