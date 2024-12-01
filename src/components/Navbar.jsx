import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            `${
              pathname === "/" ? "text-white" : "text-black"
            } hover:underline ${isActive ? "underline" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/statistics`}
          className={({ isActive }) =>
            `${
              pathname === "/" ? "text-white" : "text-black"
            } hover:underline ${isActive ? "underline" : ""}`
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/dashboard`}
          className={({ isActive }) =>
            `hover:underline ${
              pathname === "/" ? "text-white" : "text-black"
            } ${isActive ? "underline" : ""}`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/blog`}
          className={({ isActive }) =>
            `hover:underline ${
              pathname === "/" ? "text-white" : "text-black"
            } ${isActive ? "underline" : ""}`
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  
  return (
    <div
      className={`${pathname === "/" ? "bg-[#F6F6F6] pt-7" : "bg-none pt-0"}`}
    >
      <div
        className={`${
          pathname === "/"
            ? "navbar bg-[#9538E2] max-w-7xl mx-auto rounded-t-xl px-32 py-5"
            : "navbar max-w-7xl mx-auto px-32 py-5"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={`/`}
            className={`btn btn-ghost text-xl ${
              pathname === "/" ? "text-white" : "text-black"
            }`}
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 text-base">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4 items-center">
            {/* cart */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle bg-white"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-purple-800">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-warning btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* wishlist */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle bg-white"
              >
                <div className="indicator">
                  <FaRegHeart size={20} />
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
