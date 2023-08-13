import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
    <div className="">
        <div className="row">
        <div className="col-12 col-sm-3 bg-dark p-0 m-0">
          <Sidebar />
        </div>
            <div className="col-12 col-sm-9 m-0 p-0">
            <Outlet />
            </div>
        </div>
    </div>
    </>
  )
};

export default Layout;