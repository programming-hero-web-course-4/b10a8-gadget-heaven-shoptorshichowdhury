import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CategorySidebar from "../components/CategorySidebar/CategorySidebar";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Gadget Heaven | Home</title>
      </Helmet>
      <Banner></Banner>
      <section>
        <h3 className="text-4xl font-bold text-center mb-9">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="grid grid-cols-10 gap-5 my-12">
          <aside className="col-span-2">
              <CategorySidebar></CategorySidebar>
          </aside>
          <main className="col-span-8">
            <Outlet></Outlet>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Home;
