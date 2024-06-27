import "./layout.scss";
import Navbar from "../../components/navbar/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

const AuthLayout = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return <Navigate to="/login" />;
  return (
    currentUser && (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          {" "}
          <Outlet />
        </div>
      </div>
    )
  );
};

export { Layout, AuthLayout };
