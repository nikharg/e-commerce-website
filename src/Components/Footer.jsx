import { GitHub, Instagram, LinkedIn, MailOutline, Phone, Room } from "@material-ui/icons"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="left">
                <div className="logo"><h1>ShopKart</h1></div>
                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima iure ullam unde iusto odit possimus velit, iste at beatae quas quisquam sunt fugit ea odio vel non quo. Voluptatibus, aliquam.</div>
                <div className="social-container">
                    <div className="icons">
                        <LinkedIn className="icon" style={{backgroundColor : "#3B5999"}}/>
                        <GitHub className="icon" style={{backgroundColor : "black"}} />
                        <Instagram className="icon" style={{backgroundColor : "#E4405F"}}/>
                        
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="title"><h3>Useful Links</h3></div>
                <div className="list">
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Apparels</li>
                        <li>Watches</li>
                        <li>Shoes</li>
                        <li>My Account</li>
                        <li>Order Tracking</li>
                        <li>Wishlist</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="title"><h3>Contact Us</h3></div>
                <div className="item">
                    <Room className="icon"/><p>Prayagraj, Uttar Pradesh, India</p>
                </div>
                <div className="item">
                    <Phone className="icon"/><p>+9173******30</p>
                </div>
                <div className="item">
                    <MailOutline className="icon"/><p>nikhar.gupta13@gmail.com</p>
                </div>
                <div className="payment">
                    <img src="/Images/p1.jpg" alt="payment-icon" />
                    <img src="/Images/p2.jpg" alt="payment-icon" />
                    <img src="/Images/p3.jpg" alt="payment-icon" />
                    <img src="/Images/p4.jpg" alt="payment-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer
