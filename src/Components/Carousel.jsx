import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { sliderItems } from "../data/db";

const Carousel = () => {
    return (
        <>
            <div className="slider-main">
            <button className="prev"><ArrowBackIos /></button>
            <button className="next"><ArrowForwardIos /></button>
            {sliderItems.map((item) => (
                <div className="slide-container" key={item.id}>
                    <div className="slide-img">
                        <img src={require('../Images/watch1.png')} alt="img" />
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
