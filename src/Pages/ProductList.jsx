import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Select = styled.select`
padding:0.4rem;
margin:0 1rem;
font-size:1.2rem;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <>
      <Navbar />
      <div className="prod-page">
        <div className="title">
          <h1>All Products</h1>
        </div>
        <div className="filter-container">
          <div className="filter">Filter Products:
          <Select>
              <Option disabled selected>Categories</Option>
              <Option>Apparels</Option>
              <Option>Shoes</Option>
              <Option>Watches</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          </div>
          <div className="filter">Sort Products:
          <Select>
              <Option disabled selected>Newest</Option>
              <Option>Price(Low to High)</Option>
              <Option>Price(High to Low)</Option>
          </Select>
          </div>
        </div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default ProductList;
