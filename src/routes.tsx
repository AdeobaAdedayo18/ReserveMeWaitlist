import { createBrowserRouter } from "react-router-dom";
import LandingPage2 from "./pages/LandingPage2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage2 />,
  },
]);
