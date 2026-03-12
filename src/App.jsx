import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Maintenance from "./components/Maintenance";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const isMaintenance = process.env.REACT_APP_MAINTENANCE === "true";
console.log('REACT_APP_MAINTENANCE =', process.env.REACT_APP_MAINTENANCE);

function App() {
  if (isMaintenance) {
    return <Maintenance />;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
