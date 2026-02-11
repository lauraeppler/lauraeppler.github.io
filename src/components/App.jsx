import logo from './../logo.svg';
import './../App.css';
import Header from './Header';
import About from './About';
import ProjectList from './ProjectList';
import Contact from './Contact';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import projectRoutes from '../routes/projectRoutes';
import React from "react";
import Maintenance from "./Maintenance";

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
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <ProjectList />
              <Contact />
            </>
          } />
          {projectRoutes.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
