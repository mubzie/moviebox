import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviePage from "../pages/moviePages";
import ErrorPage from "../pages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:imdb_id",
    element: <MoviePage />,
  },
]);

export default router;
