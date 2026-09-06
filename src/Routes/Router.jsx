import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import KinDetails from '../pages/KinDetails/KinDetails';
import Timeline from '../pages/Timeline/Timeline';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
          index : true,
          loader: () => fetch('/public/kinData.json'),
          Component : Home,
      },
      {
        path : 'kinDetails/:id',
        loader: () => fetch('/public/kinData.json'),
        Component : KinDetails,
      },
      {
        path : 'timeline',
        loader: () => fetch('/public/kinData.json'),
        Component : Timeline,
      }
    ]
  },
]);