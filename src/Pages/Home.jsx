import React from 'react'
import Navbar from '../Components/Navbar'
import Deals from "../Components/Deals";
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Deals/>
            <Carousel/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
