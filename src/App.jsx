import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Maintenance from "./components/Maintenance";
import { useFetchProjectContent } from './projectData';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail.tsx';

const isMaintenance = process.env.REACT_APP_MAINTENANCE === "true";
console.log('REACT_APP_MAINTENANCE =', process.env.REACT_APP_MAINTENANCE);

function App() {
  const projectsData = useFetchProjectContent();
  
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
              <ProjectList projects={projectsData} />
              <Contact />
            </>
          } />
          {projectsData.map((project, idx) => (
            <Route key={idx} path={project.link} element={<ProjectDetail {...project} />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
