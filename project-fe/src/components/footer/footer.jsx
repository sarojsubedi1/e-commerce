import GoogleBadge from "../../assets/GoogleBadge.png";
import AppstoreBadge from "../../assets/AppstoreBadge.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-heading py-10">
        <div className="flex mx-4 items-center justify-between">
          <div>
            <div className="font-extrabold pb-2 text-2xl md:text-3xl text-green-500">
              My-Shop
            </div>
            <div className="flex items-center gap-3 p-2  text-xl  ">
              <FaFacebook className="hover:text-blue-700 text-white" />
              <FaTwitter className="hover:text-sky-400 text-white" />
              <FaInstagram className="hover:text-rose-500 text-white" />
            </div>
            <div className="flex items-center gap-3 text-white hover:text-green-500">
              <FaPhoneAlt />
              <div>(000)123-123</div>
            </div>
          </div>

          <div className="hidden md:block ">
            <div className="text-white font-bold">Company</div>
            <div className="text-sm text-white">About us</div>
            <div className="text-sm text-white">Our Team</div>
            <div className="text-sm text-white">Blogs</div>
            <div className="text-sm text-white">Contact</div>
          </div>
          <div className="hidden md:block">
            <div className="text-white font-bold">Account</div>
            <div className="text-white text-sm">Sign In</div>
            <div className="text-white text-sm">View Cart</div>
            <div className="text-white text-sm">My Wishlist</div>
          </div>
          <div>
            <div className="text-white font-bold">Download</div>
            <img src={GoogleBadge} width="100" height="50" className="my-2" />
            <img src={AppstoreBadge} width="100" height="50" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="py-2 mx-4 ">Copyright © 2023 Saroj Subedi</div>
      </div>
    </>
  );
}

export default Footer;
