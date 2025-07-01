import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import ErrorPage from "./pages/error";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Post from "./pages/post";
import Profile from "./pages/profile";
import Photos from "./pages/photos";
import ProtectedRoute from "./components/protectedRoutes";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      { path: "/post", element: <Post />, errorElement: <ErrorPage /> },
      { path: "/profile", element: <Profile />, errorElement: <ErrorPage /> },
      { path: "/my-photos", element: <Photos />, errorElement: <ErrorPage /> },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
  { path: "/signup", element: <Signup />, errorElement: <ErrorPage /> },
]);

export default router;
