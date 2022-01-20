import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1>YOUR BAG</h1>
        <div className="btn-tab">
          <div className="btn">
            <button>CONTINUE SHOPPING</button>
          </div>
          <div className="link">
            <p>Shopping Bag(2)</p>
            <p>Your Wishlist(0)</p>
          </div>
          <div className="cout">
            <button>CHECKOUT</button>
          </div>
        </div>
        <div className="main-cart">
          <div className="products">
            <div className="prod-detail-main">
              <div className="prod-img">
                <img src="\Images\clothes3.png" alt="product-image" />
              </div>
              <div className="prod-detail">
                <div className="prod">
                  <p>
                    <b>Product: </b>OMG T-shirt
                  </p>
                </div>
                <div className="id">
                  <p>
                    <b>Id: </b>74846481
                  </p>
                </div>
                <div className="color"></div>
                <div className="size">
                  <p>
                    <b>Size: </b>M
                  </p>
                </div>
              </div>
              <div className="prod-quantity">
                <div className="quantity">
                  <div className="btn">+</div>
                  <div className="amount">1</div>
                  <div className="btn">-</div>
                </div>
                <div className="price">$20</div>
              </div>
            </div>
          </div>

          <div className="order-summary">
            <h1>ORDER SUMMARY</h1>
            <div className="st">
              <p>Subtotal</p>
              <p>$80</p>
            </div>
            <div className="es">
              <p>Estimated Shipping</p>
              <p>$2.49</p>
            </div>
            <div className="sd">
              <p>Shipping Discount</p>
              <p>-$2.49</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>$80</p>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
