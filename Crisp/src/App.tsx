import { Outlet, Route, Routes } from "react-router-dom";
import { MainRoutes, SubRoutes } from "./routes";
import Home from "./pages/Home";
import About from "./pages/About";
import { Suspense, useEffect } from "react";
import Loader from "./modules/common/components/Loader";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./modules/common/components/Navbar";
import { useAppDispatch, useAppSelector } from "./store";
import { getPersistedUserSettings } from "./modules/login/store/actions/login";
import { getPersistedMapSettings } from "./modules/mapSettings/store/actions/map";
import { selectAccessToken } from "./modules/login/store/selectors/login";
import { fetchMarkerData } from "./modules/mapSettings/store/actions/markers";

// TODO - Create a loader for APP suspense
function App() {
  const accessToken = useAppSelector(selectAccessToken);
  console.log("Access Token:", accessToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPersistedUserSettings());
    dispatch(getPersistedMapSettings());
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchMarkerData(accessToken));
    }
  }, [accessToken, dispatch]);

  function BasicLayout() {
    return (
      <>
        <Navbar />
        <Toaster closeButton={true} richColors={true} />
        <Outlet />
      </>
    );
  }

  function LoginLayout() {
    return (
      <>
        <Toaster closeButton={true} richColors={true} />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={MainRoutes.HOME} element={<BasicLayout />}>
            <Route index element={<Home />} />
            <Route path={SubRoutes.ABOUT} element={<About />} />
            <Route path={SubRoutes.CONTACT} element={<Contact />} />
            <Route path={SubRoutes.BLOG} element={<Blog />} />
          </Route>
          <Route path={MainRoutes.LOGIN} element={<LoginLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
