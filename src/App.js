import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout";
import { Home, Product, Products } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <p>Under Maintenance !!!</p>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
