import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet, useParams } from "react-router-dom";
import "@/styles/Layout.css";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling.ts";

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
