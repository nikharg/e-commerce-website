import { NavigateBefore, NavigateNext } from "@material-ui/icons"

const Carousel = () => {
    return (
        <>
            <div className="slide-container">
                <button><NavigateBefore/></button>
                <div className="slide">
                    <img src="../Images/watch1.jpg" alt="image" />
                </div>
                <div className="slide-info">
                    <div className="title">Title</div>
                    <div className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sint vitae distinctio illo aut hic nulla, recusandae ducimus ratione. Officia facilis exercitationem voluptatibus sit sint nisi iusto temporibus perferendis impedit!</div>
                    <div className="btn"><button>Shop Now</button></div>
                </div>
                <button><NavigateNext/></button>
            </div>
        </>
    )
}

export default Carousel
