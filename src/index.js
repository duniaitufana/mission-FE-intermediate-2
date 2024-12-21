import "./App.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CardLogin from "./Pages/login/cardLogin.js";
import CardSignUp from "./Pages/signUp/cardSignUp.js";
import HomePage from "./Pages/homepage/homepage.js";

let router = createBrowserRouter([
  {
    path: "/",
    element: <CardLogin />,
    errorElement: <h1>NotFound Page 404</h1>,
  },
  {
    path: "/login",
    element: <CardLogin />,
    errorElement: <h1>NotFound Page 404</h1>,
  },
  {
    path: "/signup",
    element: <CardSignUp />,
    errorElement: <h1>NotFound Page 404</h1>,
  },
  {
    path: "/homepage",
    element: <HomePage />,
    errorElement: <h1>NotFound Page 404</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
