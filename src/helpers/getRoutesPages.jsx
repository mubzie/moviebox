import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviePage from "../pages/MoviePages";
import ErrorPage from "../pages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movies/:id",
    element: <MoviePage />,
  },
]);

export default router;
