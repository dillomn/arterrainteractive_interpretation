import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";


import Layout from './pages/layout';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import NoPage from './pages/nopage';


function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </HashRouter>
  );
}

export default App;
