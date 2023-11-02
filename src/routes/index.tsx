import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>List page</h1>,
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
