import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../components/User/UserContext";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Store from "../pages/Store/Store";
import PageNotExist from "../pages/PageNotExist/PageNotExist";

const AppRoutes = () => {
  const authorizedRoutes = [{ path: "/store", Component: Store }];

  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      {authorizedRoutes.map((route) => {
        const userLoggedIn = !!user?.userToken;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              userLoggedIn ? (
                <route.Component></route.Component>
              ) : (
                <Login></Login>
              )
            }
          />
        );
      })}
      <Route path="*" element={<PageNotExist />}></Route>
    </Routes>
  );
};

export default AppRoutes;
