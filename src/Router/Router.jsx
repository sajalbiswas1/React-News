import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Leout/Root/Root";
import Home from "../Leout/Page/Home/Home";
import Login from "../Leout/Page/Login/Login";
import SignUP from "../Leout/Page/Login/SignUp/SignUP";
import News from "../Leout/Page/SingalNews/News";
import Protected from "../Leout/Proveder/Protected";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home/>,
            loader: () => fetch('../../public/data/news.json'),
        },
        {
          path:'/news/:id',
          element:<Protected><News></News></Protected>
          
        },
        {
          path: '/LogIn',
          element:<Login></Login>
        },
        {
          path: '/SignUP',
          element:<SignUP></SignUP>
        }
      ]
    },
  ]);

  export default router;