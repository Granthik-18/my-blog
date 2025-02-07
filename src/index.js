import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Resources from './Component/Resources/Resources';
import Support from './Component/Support/Support';
import User from './Component/User/User';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='resources' element={<Resources />} />
      <Route path='support' element={<Support />} />
      <Route path='user' element={<User />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);