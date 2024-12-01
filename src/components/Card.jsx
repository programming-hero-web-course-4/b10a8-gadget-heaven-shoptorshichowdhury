import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const { id, product_title, product_image, price } = product;
  return (
    <div className="card bg-white shadow-xl overflow-hidden p-6 space-y-4">
      <figure className="h-[180px]">
        <img
          src={product_image}
          alt={product_title}
          className="h-full w-full overflow-hidden object-fill rounded-xl"
        />
      </figure>
      <div className="space-y-4">
        <h2 className="card-title text-lg">{product_title}</h2>
        <p>Price: ${price}</p>
        <button
          onClick={() => navigate(`/details/${id}`)}
          className="btn btn-primary btn-outline"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
