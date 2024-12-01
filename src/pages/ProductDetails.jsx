import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import ReactStars from "react-rating-stars-component";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { addToCart, addToWishlist, getWishProducts } from "../utilities";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});
  const [isWishlist, setIsWishlist] = useState(false);

  const {
    product_title,
    product_image,
    price,
    description,
    availability,
    specification,
    rating,
  } = product;

  useEffect(() => {
    const singleData = [...data].find((item) => item.id == id);
    setProduct(singleData);

    const wishlistProduct = getWishProducts();
    const isExist = wishlistProduct.find(item=> item.id == singleData.id);
    if(isExist){
      setIsWishlist(true);
    }
  }, []);

  const handleCart = product =>{
    addToCart(product);
  }

  const handleWishlist = product => {
    addToWishlist(product);
    setIsWishlist(true)
  }


  return (
    <>
      <div className="bg-[#9538E2] py-8 pb-32">
        <Heading
          title={`Product Details`}
          subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
        ></Heading>
      </div>

      <div className="bg-white flex items-center gap-5 w-4/6 mx-auto my-4 rounded-3xl p-7 -translate-y-28 overflow-hidden">
        <div className="w-2/5">
          <img
            className="rounded-2xl w-full object-cover"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div className="flex-grow space-y-4">
          <h3 className="text-3xl font-semibold">{product_title}</h3>
          <p className="text-xl font-semibold text-[#09080FCC]">
            Price: ${price}
          </p>
          <div>
            {availability == true ? (
              <button className="btn btn-xs rounded-2xl bg-green-100 text-green-500 btn-outline border-green-500">
                In Stock
              </button>
            ) : (
              <button className="btn btn-xs rounded-2xl bg-red-100 text-red-500 btn-outline border-red-500">
                Out of Stock
              </button>
            )}
          </div>
          <p className="text-lg text-[#09080F99]">{description}</p>
          <p className="font-bold text-[#09080F]">Specification:</p>
          <ol className="pl-5 text-[#09080F99]">
            {specification &&
              specification.map((item) => (
                <li className="list-decimal">{item}</li>
              ))}
          </ol>
          <p className="font-bold text-[#09080F] flex gap-1 items-center">
            Rating{" "}
            <span>
              <FaStar className="text-amber-500" />
            </span>
          </p>
          <div className="flex gap-3 items-center">
            {rating && (
              <ReactStars
                value={rating}
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                edit={false}
              />
            )}
            <span className="badge badge-ghost">{rating}</span>
          </div>
          <div className="flex gap-4">
            {/* add to cart button */}
            <button 
            onClick={()=>handleCart(product)}
            className="btn bg-[#9538E2] text-white text-lg rounded-3xl px-5">
              Add To Cart{" "}
              <span className="text-2xl">
                <IoCartOutline />
              </span>
            </button>

            {/* add to wishlist button */}
            <button 
            disabled={isWishlist}
            onClick={()=>handleWishlist(product)}
            className="btn btn-circle hover:bg-[#9538E2] text-2xl text-gray-400 hover:text-white">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
