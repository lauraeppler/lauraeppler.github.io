import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { Outlet, useParams } from "react-router-dom";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling.ts";
import "@/styles/layout/Layout.css";

function Layout() {
  const { id } = useParams();
  useSmoothScrolling();

  return (
    <div className="layout">
      <Header />
      <main id="scroll-container">
        <div id={id} className="main-scroll-container">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
