import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import PlantDetails from "../PlantDetails/PlantDetails";

export const router = createBrowserRouter([
  {
    path: '/' ,
    Component: Home,
    loader: ()=> fetch(`https://openapi.programming-hero.com/api/plants`),
    children:[
    //     {
    //   path: '/plantsDetails',
    //   Component: PlantDetails
    // },
    
],

  },
  {
      path: '/plantsDetails/:id',
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/plant/${params.id}`),
      Component: PlantDetails
    },
]);