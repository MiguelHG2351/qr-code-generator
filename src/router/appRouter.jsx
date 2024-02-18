import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
  return <RouterProvider router={router} />
}

export {
  AppRouter
}