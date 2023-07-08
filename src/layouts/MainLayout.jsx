import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
        </>
    );
};

export default MainLayout;