import { useEffect, useState } from "react";
import "./CategorySidebar.css";
import { NavLink } from "react-router-dom";

const CategorySidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <div className="bg-white p-6 rounded-2xl flex flex-col gap-6">
      <NavLink to={`/`} className="btn px-6">All Products</NavLink>
      {categories.map((item) => (
        <NavLink to={`/category/${item.category}`} key={item.id} className="btn px-6">
          {item.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategorySidebar;
