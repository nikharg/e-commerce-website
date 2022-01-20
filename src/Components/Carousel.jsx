import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data/db";

const Carousel = () => {
    setTimeout(() => handleClick("right"), 3000);
    const [sliderImg, setSliderImg] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSliderImg(sliderImg > 0 ? sliderImg - 1 : 2)
        } else {
            setSliderImg(sliderImg < 2 ? sliderImg + 1 : 0)
        }
    }
    return (
        <>
            <div className="slider-main" >
                <button className="prev" onClick={() => handleClick("prev")}><ArrowBackIos /></button>
                <button className="next" onClick={() => handleClick("next")}><ArrowForwardIos /></button>
                {sliderItems.map((item)=>(
                <div className="slide-container" key={item.id} style={{ transform: `translateX(${sliderImg * -99}vw)` }}>
                    <div className="slide-img">
                    <img src={item.img} alt="img" />
                </div>
                <div className="slide-info">
                    <div className="title">{item.title}</div>
                    <div className="info">{item.desc}</div>
                    <button>Shop Now</button>
                </div>
            </div>
                ))}
            </div>
        </>
    )
}

export default Carousel;
