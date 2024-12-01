import { IoIosCloseCircleOutline } from "react-icons/io";

const CartlistCard = ({ product, handleRemove }) => {
  const { id, product_image, product_title, description, price } = product || {};
  
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-3xl relative">
      <div className="w-1/4">
        <img className="rounded-xl" src={product_image} />
      </div>
      <div className="flex-grow space-y-4">
        <p className="text-2xl font-semibold text-[#09080F]">{product_title}</p>
        <p className="text-lg text-[#09080F99]">{description}</p>
        <p className="text-[#09080FCC] text-xl font-semibold">
          Price: ${price}
        </p>
      </div>
      <button 
      onClick={()=>handleRemove(id)}
      className="absolute z-20 top-6 right-6">
        <IoIosCloseCircleOutline className="text-red-600 text-4xl" />
      </button>
    </div>
  );
};

export default CartlistCard;
