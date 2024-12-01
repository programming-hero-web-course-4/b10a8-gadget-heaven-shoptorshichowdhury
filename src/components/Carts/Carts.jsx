import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { getCartProducts, removeFromCart } from "../../utilities/index";
import { useEffect, useState } from "react";
import CartlistCard from "../CartlistCard/CartlistCard";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [modalTotalCost, setModalTotalCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = getCartProducts();
    setProducts(data);
  }, []);

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    setTotalCost(total);
  }, [products]);

  const handleRemove = (id) => {
    removeFromCart(id);
    const data = getCartProducts();
    setProducts(data);
  };

  const handlePurchase = () => {
    setModalTotalCost(totalCost);
    setTotalCost(0);
    setProducts([]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="my-12">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Cart</h3>

        <div className="flex gap-6 items-center">
          <p className="text-2xl font-bold">Total cost: ${totalCost}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleSort}
              className="btn btn-outline text-[#8332C5] border-[#8332C5] rounded-3xl text-lg px-6"
            >
              Sort by Price <HiOutlineAdjustmentsVertical />
            </button>
            <button
              disabled={totalCost === 0 || products.length === 0}
              onClick={handlePurchase}
              className="btn btn-outline text-lg text-white bg-[#8332C5] rounded-3xl px-6"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

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

      {/* modal */}
      <dialog open={isModalOpen} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col items-center justify-center">
            <div className="text-8xl text-green-400 mb-2"><IoMdCheckmarkCircleOutline /></div>
            <h4 className="pb-4 border-b text-3xl font-bold">
              Payment Successfully
            </h4>
            <p className="text-lg my-2">Thanks for purchasing.</p>
            <p>Total Cost: ${modalTotalCost}</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
                <button onClick={handleCloseModal} className="btn">
                  Close
                </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Carts;
