import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LandingPage2 from "./pages/LandingPage2";
import LandingPage3 from "./pages/LandingPage3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/2",
    element: <LandingPage2 />,
  },
  {
    path: "/3",
    element: <LandingPage3 />,
  },
]);
