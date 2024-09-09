import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import HomePage from "./home";
import QrResult from "./results";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomePage />
    )
  },
  {
    path: '/result',
    element: (
      <QrResult />
    )
  }
])

const AppRouter = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export {
  AppRouter
}