import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "pages/Movies";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/details/:id",
    element: <h1>Details page</h1>,
  },
]);

function Routes() {
  return <RouterProvider router={routes} />;
}

export default Routes;
