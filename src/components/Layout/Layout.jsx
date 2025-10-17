import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="app">
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
