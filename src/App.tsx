import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Votant from "./pages/Votants";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Danse avec les mariés</h1>
      </div>
    ),
  },
  {
    path: "/votants",
    element: <Votant />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
