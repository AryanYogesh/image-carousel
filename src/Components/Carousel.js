import React,{ useState } from "react";
import "./Carousel.css";

const Carousel = () => {
    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
        "https://via.placeholder.com/600x400?text=Image+2",
        "https://via.placeholder.com/600x400?text=Image+3",
    ]


const [CurrentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
    setCurrentIndex((CurrentIndex+1)% images.length);
};

const previousSlide = () => {
    setCurrentIndex((CurrentIndex-1+images.length)%images.length)
};

return(
    <div className="carousel-container">
        <div 
            className="carousel-images"
            style={{transform:`translate(-${CurrentIndex*100}%)`}}
        >
            {images.map((img,index)=>(
                <img key={index} src={img} alt={`slide${index + 1}`}></img>
            ))}
        </div>
        <div className="carousel-buttons">
            <button onClick={previousSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </div>
    </div>
);

};

export default Carousel;