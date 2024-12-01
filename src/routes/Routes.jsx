import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import ProductDetails from "../pages/ProductDetails";
import ProductCards from "../components/ProductCards/ProductCards";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/Blog";
import Error from "../pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("/blog.json"),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default routes;
