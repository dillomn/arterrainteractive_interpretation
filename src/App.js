import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";


import Layout from './pages/layout';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import NoPage from './pages/nopage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
