import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviePage from "../pages/MoviePage/MoviePages";
import ErrorPage from "../pages/ErrorPage/ErrorPages";
import DefaultPages from "../pages/DefaultPage/DefaultPages";

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
