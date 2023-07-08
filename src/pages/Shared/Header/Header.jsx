import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" bg-[#9336B4] text-white">
        <div className="navbar w-11/12 md:10/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Link className="text-xl font-bold inline-flex items-center uppercase "><span><img className="w-10 h-10" src="/public/watch.png" alt="logo" /></span> Retail Watch</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center space-x-5 uppercase font-semibold">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink>All Prodcuts</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to={"/login"} className="btn text-[#9336B4]">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
