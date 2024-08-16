import { Link, NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="bg-base-200 mb-10">
      <div className="max-w-6xl mx-auto navbar">
        <div className="navbar-start">
          <Link className="btn bg-black text-[#fff] hover:bg-primary text-2xl">
            onlineSHOP
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/cart">
            <div className="indicator cursor-pointer group">
              <span className="indicator-item badge badge-primary group-hover:badge-secondary">
                9
              </span>
              <MdShoppingCart className="w-7 h-7 text-secondary group-hover:text-primary transition duration-400" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
