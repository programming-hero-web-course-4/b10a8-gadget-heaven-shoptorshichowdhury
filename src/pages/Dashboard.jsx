import { useState } from "react";
import Heading from "../components/Heading";
import Carts from "../components/Carts/Carts";
import Wishlist from "../components/Wishlist/Wishlist";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  const [isActive, setIsActive] = useState(true);

  const handleActiveButton = (status) => {
    if (status) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
      <div className="bg-[#9538E2] py-8">
        <Heading
          title={`Dashboard`}
          subtitle={`Manage your tech purchases and saved items with ease in your dashboard – view your cart and wishlist for a personalized shopping experience.`}
        ></Heading>

        {/* toggle cart & wishlist button */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <button
            onClick={() => handleActiveButton(true)}
            className={`btn ${
              isActive ? "bg-white text-purple-800" : "btn-outline text-white"
            }`}
          >
            Cart
          </button>

          <button
            onClick={() => handleActiveButton(false)}
            className={`btn ${
              isActive ? "btn-outline text-white" : "bg-white text-purple-800"
            }`}
          >
            WishList
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {isActive ? <Carts></Carts> : <Wishlist></Wishlist>}
      </div>
    </>
  );
};

export default Dashboard;

// btn text-white rounded-3xl px-16 btn-outline hover:bg-white hover:text-[#9538E2] hover:border-none
