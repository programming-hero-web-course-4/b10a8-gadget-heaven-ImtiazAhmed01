import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ProductCard from './Components/ProductCard/ProductCard';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('../Category.json'),
    children: [
      {
        path: '/',
        element: <ProductCard />,
        loader: () => fetch('../public/Gadget.json'),
      },
      {
        path: '/category/:category',
        element: <ProductCard />,
        loader: () => fetch('../public/Gadget.json'),
      },


    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  },
  {
    path: '/statistics',
    element: <Statistics></Statistics>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
