import {
  BiCart,
  BiMenu,
  BiSearch,
  BiSearchAlt2,
  BiUser,
  BiHeart,
} from "react-icons/bi";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className=" border-b">
        <div className="h-16 flex items-center justify-between mx-4 py-2">
          <div className="flex-1 text-2xl md:text-3xl text-green-500 font-extrabold ">
            My-Shop
          </div>

          <div className="hidden md:flex justify-between flex-1 border border-green-500 rounded ">
            <input
              type="search"
              placeholder="Search products..."
              className="outline-none m-1 p-1 w-3/4"
            />
            <button className="bg-green-500 font-extrabold text-2xl text-white  p-1 px-2 rounded border border-green-500 outline-0 hover:bg-green-600 hover:border-green-600 ">
              <BiSearch />
            </button>
          </div>

          <div className="md:hidden flex text-gray-700  gap-2 cursor-pointer text-3xl">
            <BiSearchAlt2 />
            <BiCart />
            <BiMenu />
          </div>
          <div className="flex-1 hidden md:flex justify-end text-gray-700 font-extrabold gap-5 cursor-pointer text-3xl">
            <BiHeart />
            <BiCart />
            <BiUser />
          </div>
        </div>
      </div>
      <NavbarButtom />
    </>
  );
}

function NavbarButtom() {
  return (
    <>
      <div className="hidden md:block border-b">
        <div className="flex  mx-3  h-12  p-1.5 items-center justify-between">
          <div>
            <button className="bg-green-400 text-white p-1 text-center rounded border border-green-400 outline-0 hover:bg-green-500 hover:border-green-500 font-bold">
              Browse All Categories
            </button>
          </div>

          <div>
            <ul className="flex items-center gap-5 font-semibold text-green-500">
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Blogs</li>
              <li>Our team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex">
            <div className="flex items-center gap-2 p-2 border-r text-xl text-gray-500 ">
              <FaFacebook className="hover:text-blue-900" />
              <FaTwitter className="hover:text-sky-500" />
              <FaInstagram className="hover:text-rose-700" />
            </div>
            <div className="flex items-center pl-2 text-gray-500 hover:text-green-500">
              <FaPhoneAlt />
              <div>(000)123-123</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
