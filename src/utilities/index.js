import toast from "react-hot-toast";


/* ------------------------------------CartList-------------------------------------------- */
//get cart list
const getCartProducts = () => {
  const all = localStorage.getItem("cart");
  const selected = JSON.parse(all);
  if (all) {
    return selected;
  } else {
    return [];
  }
};

//add to cart
const addToCart = (product) => {
  const selected = getCartProducts();
  const isExist = selected.find((item) => item.id == product.id);
  if (isExist) {
    return toast.error("already added to cart!");
  }
  selected.push(product);
  localStorage.setItem("cart", JSON.stringify(selected));
  toast.success("product successfully added to cart");
};

//remove from cart
const removeFromCart = (id) => {
  const selected = getCartProducts();
  const remaining = selected.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
};



/* ------------------------------------WishList-------------------------------------- */
//get wish list
const getWishProducts = () => {
  const all = localStorage.getItem("wish");
  const selected = JSON.parse(all);
  if (all) {
    return selected;
  } else {
    return [];
  }
};

//add to wishlist
const addToWishlist = (product) => {
  const selected = getWishProducts();
  const isExist = selected.find((item) => item.id == product.id);
  if (isExist) {
    return toast.error("already added to wishlist!");
  }
  selected.push(product);
  localStorage.setItem("wish", JSON.stringify(selected));
  toast.success("product successfully added to wishlist");
};


//remove from cart
const removeFromWishlist = (id) => {
  const selected = getWishProducts();
  const remaining = selected.filter((product) => product.id !== id);
  localStorage.setItem("wish", JSON.stringify(remaining));
};



export { addToCart, getCartProducts, removeFromCart, getWishProducts, addToWishlist, removeFromWishlist };
