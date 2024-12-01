import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../Card";


const ProductCards = () => {
  const { category } = useParams();
  const data = useLoaderData();

  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (category) {
      const categoryProduct = [...data].filter(
        (product) => product.category == category
      );
      setProducts(categoryProduct);
    } else {
      setProducts(data);
    }
  }, [data, category]);

  return (
    <div className="col-span-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
