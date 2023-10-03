import React from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import NotFoundPage from './pages/NotFoundPage'

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>
  },
  {
    path: "/about",
    element: <Layout><AboutPage /></Layout>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App