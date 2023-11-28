import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Foods from "./pages/foods/Foods";
import Home from "./pages/home/Home";
import NewFood from "./pages/newFood/NewFood";
import NewUser from "./pages/newUser/NewUser";
import Order from "./pages/order/Order";
import Orders from "./pages/orders/Orders";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import { LoginContext } from "./context/LoginContext";
import { useContext } from "react";
import { useState } from "react";

const log = true;

function Layout() {

  const { login } = useContext(LoginContext)

  return (
    <>
      {login ? <Login /> : <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "new-user",
        element: <NewUser />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "foods",
        element: <Foods />
      },
      {
        path: "new-food",
        element: <NewFood />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "order",
        element: <Order />
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  }
]);

function App() {

  const [login, setLogin] = useState(true)

  return (
    <LoginContext.Provider value={{login, setLogin}}>
      <RouterProvider router={router} />
    </LoginContext.Provider>
  )
}
export default App