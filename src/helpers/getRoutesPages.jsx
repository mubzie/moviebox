import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviePage from "../pages/moviePages";
import ErrorPage from "../pages/errorPages";
import DefaultPages from "../pages/defaultPages";

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
  {
    path: "default",
    element: <DefaultPages />,
  },
]);

export default router;
