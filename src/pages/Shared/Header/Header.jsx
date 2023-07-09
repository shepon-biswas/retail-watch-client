import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.photoURL)

  // User logout function
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className=" bg-[#9336B4] text-white">
        <div className="navbar md:w-10/12 mx-auto">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] md:p-2 shadow bg-[#9336B4] rounded-box w-52"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <Link className=" text-xs md:text-xl font-bold inline-flex items-center uppercase ">
              <span>
                <img className="w-10 h-10" src="/public/watch.png" alt="logo" />
              </span>{" "}
              Retail Watch
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center space-x-5 uppercase font-semibold">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink>All Prodcuts</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </ul>
          </div>
          <div className="navbar-end space-x-3">
            <Link>
              <div className="indicator me-2">
                <FaShoppingCart className="w-6 h-6  "></FaShoppingCart>
                <span className="badge badge-sm indicator-item">80</span>
              </div>
            </Link>
            {user ? (
              <>
                <Link onClick={handleLogout} className="btn text-[#9336B4]">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"} className="btn text-[#9336B4]">
                  Login
                </Link>
              </>
            )}
            {user && (
              <>
                <img
                  className="rounded-full h-12 w-12 ring ring-white ring-offset-2 cursor-pointer"
                  src={user?.photoURL}
                  alt="user image"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
