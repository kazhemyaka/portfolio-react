import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import "./i18n";
import ContactsLayout from "./components/Layout/ContactsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/contacts",
    element: <ContactsLayout />,
    children: [{ index: true, element: <Contacts /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
