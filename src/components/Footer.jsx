const Footer = () => {
  return (
    <footer className="footer footer-center bg-white text-white py-24">
      <div>
        <h3 className="text-3xl font-bold text-black">Gadget Heaven</h3>
        <p className="text-[#09080F99] font-medium">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="border-b border-gray-300 w-5/6"></div>

      <div className="footer justify-evenly text-black">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
