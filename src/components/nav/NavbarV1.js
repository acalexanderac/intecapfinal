import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Home from '../rick/Home'; // Importa el componente Home
import About from '../todolist/About'; // Importa el componente About

// Definir las rutas
const routes = [
  {
    path: '/',
    name: 'API RICK Y MORTY',
    exact: true,
    element: <Home />,
  },
  {
    path: '/about',
    name: 'Librería Firebase',
    exact: true,
    element: <About />,
  },
  // Agregar más rutas aquí...
];

const NavbarV1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/Home">
            Ejercicio Final CHRISTIAN ARIAS cariasc@miumg.edu.gt
          </Link>
          <ul className="navbar-nav">
            {routes.map((route, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet /> {/* Renderiza el componente apropiado de acuerdo a la ruta actual */}
      </div>

    </div>
  );
};

export default NavbarV1;

