import ReactDOM from 'react-dom/client'
import React from 'react'
import Navbar from "./components/navbar/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListPage from './routes/listPage/ListPage';
import Layout from './routes/layout/layout';
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profilePage/ProfilePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
        {
          path: "/profile",
          element: <ProfilePage/>,
        },
      ]
    },
    
  ]);

 

  return (
    
    
    <RouterProvider router={router}/>
  );
}

export default App;
