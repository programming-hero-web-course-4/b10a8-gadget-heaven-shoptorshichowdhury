import { getWishProducts, removeFromWishlist } from "../../utilities/index";
import { useEffect, useState } from "react";
import CartlistCard from "../CartlistCard/CartlistCard";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getWishProducts();
    setProducts(data);
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    const data = getWishProducts();
    setProducts(data);
  };
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold">Wishlist</h3>

      {/* products show here */}
      <div className="flex flex-col gap-6 my-12">
        {products.map((product) => (
          <CartlistCard
            key={product.id}
            product={product}
            handleRemove={handleRemove}
          ></CartlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
