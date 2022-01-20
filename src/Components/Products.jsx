import { popularProducts } from "../data/db";
import Product from "./Product";

const Products = () => {
  return (
    <div className="prod-container">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
