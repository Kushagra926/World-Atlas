import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import { AppLayout } from './Components/Layout/AppLayout'

import './App.css'

import Login from './pages/Login'
import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import { Country } from './pages/Country'
import { About } from './pages/About'
import { ErrorPage } from './pages/ErrorPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (user) => {
    console.log("User logged in:", user);
    setIsAuthenticated(true);
  };

      const router = createBrowserRouter([
        {
          path: '/',
          element: isAuthenticated ? <AppLayout /> : <Login onLogin={handleLogin} />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            { 
              path: 'about',
              element: <About />
            },
            {
              path: 'country',
              element: <Country />
            },
            {
              path: 'contact',
              element: <Contacts />
            }],
          }
        ])
    
  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
