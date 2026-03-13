import Header from './Header/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useSmoothScrolling from '../hooks/useSmoothScrolling';

function Layout() {
  useSmoothScrolling();

  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;