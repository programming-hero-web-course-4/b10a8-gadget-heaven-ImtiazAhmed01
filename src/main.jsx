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
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import SignUp from './Components/Sign Up/SignUp';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     loader: () => fetch('../Category.json'),
//     children: [
//       {
//         path: '/',
//         element: <ProductCard />,
//         loader: () => fetch('../public/Gadget.json'),
//       },
//       {
//         path: '/category/:category',
//         element: <ProductCard />,
//         loader: () => fetch('../public/Gadget.json'),
//       },


//     ]
//   },
//   {
//     path: '/dashboard',
//     element: <Dashboard></Dashboard>
//   },
//   {
//     path: '/statistics',
//     element: <Statistics></Statistics>
//   },


//   {
//     path: '/product/:id', // Route for product details
//     element: <Details />,
//     loader: async ({ params }) => {
//       const response = await fetch('../public/Gadget.json');
//       const products = await response.json();
//       return products.find(product => product.id === params.id); // Load product by id
//     },
//   },

// ]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     loader: () => fetch('../Category.json'),
//     children: [
//       {
//         path: '/',
//         element: <ProductCard />,
//         loader: () => fetch('../public/Gadget.json'),
//       },
//       {
//         path: '/category/:category',
//         element: <ProductCard />,
//         loader: () => fetch('../public/Gadget.json'),
//       },
//       {
//         path: '/product/:productId',
//         element: <Details />,
//         loader: async ({ params }) => {
//           const response = await fetch('/Gadget.json');
//           const products = await response.json();
//           const product = products.find(item => item.product_id === params.productId);
//           return product || null;
//         }
//       }

//     ],
//   },
//   {
//     path: '/dashboard',
//     element: <Dashboard />,
//   },
//   {
//     path: '/statistics',
//     element: <Statistics />,
//   }
// ]);
const router = createBrowserRouter([



  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('../Category.json'),
    children: [
      {
        path: "/",
        element: <ProductCard />,
        loader: () => fetch('../public/Gadget.json'),
      },
      {
        path: "/category/:category",
        element: <ProductCard />,
        loader: () => fetch('../public/Gadget.json'),
      },
      {
        path: "/product/:productId",
        element: <Details />,
        loader: () => fetch('../public/Gadget.json')

      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart />,
        loader: () => fetch('../public/Gadget.json')
      },

      {
        path: '/dashboard/wishlist',
        element: <Wishlist></Wishlist>
      }
    ]
  },

  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)