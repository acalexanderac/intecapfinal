
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarV1 from './components/nav/NavbarV1';
import Home from './components/rick/Home';
import About from './components/todolist/About';
// Importa los componentes para las demás rutas aquí...

const App = () => {
  return (
    <Router>
      <NavbarV1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Agrega más rutas y componentes aquí... */}
      </Routes>
    </Router>
  );
};

export default App;
