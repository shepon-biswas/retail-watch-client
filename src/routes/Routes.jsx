import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartPage from "../pages/CartPage/CartPage";
import ThankYou from "../pages/ThankYou/ThankYou";
import Dashboard from "../layouts/Dashboard";
import AllProducts from "../pages/Dashboard/AllProducts/AllProducts";
import Customers from "../pages/Dashboard/Customers/Customers";
import Orders from "../pages/Dashboard/Orders/Orders";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://retail-watch-server.vercel.app/products/${params.id}`),
      },
      {
        path:"cart",
        element: <CartPage></CartPage>
      },
      {
        path:"thank-you",
        element: <ThankYou></ThankYou>
      }
    ],
  },
  {
    path:"dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: "all-products",
        element: <AllProducts></AllProducts>
      },
      {
        path: "customers",
        element: <Customers></Customers>
      },
      {
        path: "orders",
        element: <Orders></Orders>
      },
      {
        path:"home",
        element: <AdminHome></AdminHome>
      }
    ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);

export default router;
