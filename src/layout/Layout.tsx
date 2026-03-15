import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import useSmoothScrolling from "@/hooks/useSmoothScrolling";
import "@/styles/Layout.css";

function Layout() {
  useSmoothScrolling();

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
