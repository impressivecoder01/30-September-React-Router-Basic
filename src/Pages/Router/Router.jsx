import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";

export const router = createBrowserRouter([
  {
    path: '/' ,
    Component: Home,
    children:[
        {
            path: '/about',
            Component: About
    },
],
  },
]);