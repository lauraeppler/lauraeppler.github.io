import Header from '../components/Header/Header'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import useSmoothScrolling from '../hooks/useSmoothScrolling';
import './Layout.css';

function Layout() {
  useSmoothScrolling();

  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default Layout;