import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "pages/Movies";
import MoviesDetails from "pages/MovieDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/details/:id",
    element: <MoviesDetails />,
  },
]);

function Routes() {
  return <RouterProvider router={routes} />;
}

export default Routes;
