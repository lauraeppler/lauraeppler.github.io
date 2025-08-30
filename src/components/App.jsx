import logo from './../logo.svg';
import './../App.css';
import Header from './Header';
import About from './About';
import ProjectList from './ProjectList';
import Contact from './Contact';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

function App() {
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
          <Route path="/projekt/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
