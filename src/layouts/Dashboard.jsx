import {
  FaClipboardList,
  FaHeadset,
  FaHome,
  FaListAlt,
  FaThList,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#9336B4] text-white">
            {/* Sidebar content here */}
            <h2 className="text-xl font-bold">Retail Watch Shop</h2>
            <div className="divider"></div>
            <div>
              <>
                <li className="font-semibold">
                  <NavLink to={"/dashboard/all-products"}>
                    <FaListAlt></FaListAlt> Product List
                  </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to={"/dashboard/customers"}>
                    <FaUsers></FaUsers> Customers List
                  </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to={"/dashboard/orders"}>
                    <FaClipboardList></FaClipboardList> Order List
                  </NavLink>
                </li>
              </>
            </div>

            <div className="mt-20">
              <div className="divider"></div>
              <li className="font-semibold">
                <NavLink to={"/"}>
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/"}>
                  <FaThList></FaThList>All Products
                </NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/contact"}>
                  <FaHeadset></FaHeadset>Contact
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
