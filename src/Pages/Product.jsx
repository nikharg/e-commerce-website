import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Select = styled.select`
  padding: 0.4rem;
  margin: 0 1rem;
  font-size: 1.2rem;
`;
const Option = styled.option``;

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="prod-page-container">
        <div className="img-container">
          <img src="\Images\clothes5.png" alt="" />
        </div>
        <div className="info-container">
          <div className="title">
            <h1>White T-Shirt</h1>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus dicta, hic, illum, quod in a officiis ab
            reprehenderit odio sit blanditiis voluptatem iure placeat! Numquam
            pariatur, libero ex eveniet veritatis quidem accusantium molestiae
            incidunt cumque nihil sunt eius hic provident!
          </div>
          <div className="price">$20</div>
          <div className="filter-container">
            <p>Color :</p>
            <div className="btn">
              <div style={{ backgroundColor: "blue" }}></div>
              <div style={{ backgroundColor: "black" }}></div>
              <div style={{ backgroundColor: "grey" }}></div>
            </div>
            <div className="options">
              Size :
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </div>
          </div>
          <div className="add-container">
            <div className="quantity">
              <div className="btn">+</div>
              <div className="amount">1</div>
              <div className="btn">-</div>
            </div>
          
              <button className="add-to-cart">ADD TO CART</button>
            
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
