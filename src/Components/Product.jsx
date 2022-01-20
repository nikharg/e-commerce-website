import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Product = ({item}) => {
    return (
        <div className='prod-innercontainer'>
            <img src={item.img} alt="product image" />
            <div className="prod-info">
                <div className="icons">
                    <ShoppingCartOutlined className='icon'/>
                </div>
                <div className="icons">
                    <SearchOutlined className='icon'/>
                </div>
                <div className="icons">
                    <FavoriteBorderOutlined className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Product;
