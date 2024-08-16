import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Products from './Components/Products.jsx';
import FilterProvider from './Context/FilterProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Products></Products>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <FilterProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </FilterProvider>
    </AuthProvider>
  </StrictMode>,
)
