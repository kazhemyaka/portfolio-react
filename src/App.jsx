import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import "./i18n";
import ContactsLayout from "./components/Layout/ContactsLayout";
import ContactsPage from "./pages/ContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/contacts",
    element: <ContactsLayout />,
    children: [{ index: true, element: <ContactsPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
