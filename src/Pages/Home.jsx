import React from 'react'
import Navbar from '../Components/Navbar'
import Deals from "../Components/Deals";
import Carousel from '../Components/Carousel';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Deals/>
            <Carousel/>
        </div>
    )
}

export default Home
