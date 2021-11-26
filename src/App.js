import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Home from "./components/views/Home";
import Loader from "components/Loader";
import { authOperations, authSelectors } from "redux/auth";
import PrivateRoute from "PrivateRoute";
import PublicRoute from "PublicRoute";
import Contacts from "./components/views/Contacts";

const Register = lazy(() =>
  import("./components/views/Register" /* webpackChunkName: "register-page" */)
);

const Login = lazy(() =>
  import("./components/views/Login" /* webpackChunkName: "login-page" */)
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className='container'>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<PublicRoute component={Home} />} />
              <Route
                path='/register'
                element={<PublicRoute component={Register} restricted />}
              />
              <Route
                path='/login'
                element={
                  <PublicRoute
                    component={Login}
                    redirectTo='/contacts'
                    restricted
                  />
                }
              />
              <Route
                path='/contacts'
                element={
                  <PrivateRoute component={Contacts} redirectTo='/login' />
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
}
