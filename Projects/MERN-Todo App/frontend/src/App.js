import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Components/Homepage';
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/add-user",
      element: <Adduser />,
    },
    {
      path: "/edit-user",
      element: <Edituser />,
    },
    {
      path: "*",
      element: <div>page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
