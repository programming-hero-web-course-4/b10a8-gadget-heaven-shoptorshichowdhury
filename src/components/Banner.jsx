import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 bg-[#9538E2] py-7 pb-60 px-32 rounded-b-xl">
        <h2 className="text-5xl font-bold text-white text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="pt-4">
          <button className="btn text-[#9538E2] rounded-3xl px-8">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-9/12 mx-auto h-[550px] p-5 border border-white rounded-3xl bg-white/30 -translate-y-48">
        <img
          className="rounded-3xl h-full w-full object-cover"
          src={bannerImg}
          alt="banner"
        />
      </div>
    </>
  );
};

export default Banner;
