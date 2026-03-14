import Maintenance from "@/components/Maintenance";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import '@/styles/App.css'

const isMaintenance = import.meta.VITE_REACT_APP_MAINTENANCE === "true";
console.log('VITE_REACT_APP_MAINTENANCE =', import.meta.VITE_REACT_APP_MAINTENANCE);

function App() {
  if (isMaintenance) {
    return <Maintenance />;
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
