import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  return (
    <HelmetProvider>
      <div className="bg-[#F6F6F6]">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-573px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Toaster />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
