import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviePage from "../pages/moviePages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:imdb_id",
    element: <MoviePage />,
  },
]);

export default router;
