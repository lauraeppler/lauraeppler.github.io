import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import "@/styles/Layout.css";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling.ts";

function Layout() {
  useSmoothScrolling();

  return (
    <div className="layout">
      <Header />
      <main id="scroll-container">
        <div className="main-scroll-container">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
