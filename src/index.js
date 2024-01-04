import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import HomePage from './pages/HomePage';
import './index.css';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';

const routes = [
  {
    path: '/Portfolio/',
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/Portfolio/',
        element: <HomePage />,
      },
      {
        path: '/Portfolio/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/Portfolio/contact',
        element: <Contact />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  </React.StrictMode>
);
