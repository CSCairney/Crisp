import { Outlet, Route, Routes } from "react-router-dom";
import { MainRoutes, SubRoutes } from "./routes";
import Home from "./pages/Home";
import About from "./pages/About";
import { Suspense } from "react";
import Loader from "./modules/common/components/Loader";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./modules/common/components/Navbar";
import "./app.scss";

// TODO - Create a loader for APP suspense
function App() {

  function BasicLayout() {
    return (
      <>
      <div className="app">
        <div className="app__header">
          <Navbar />
        </div>
        <div className="app__content">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div className="app__overlay">
        <Loader />
        <Toaster closeButton={true} richColors={true} />
      </div>
      </>
    );
  }

  function LoginLayout() {
    return (
      <>
      <div className="app">
        <div className="app__header">
          <Navbar />
        </div>
        <div className="app__content">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div className="app__overlay">
        <Loader />
        <Toaster closeButton={true} richColors={true} />
      </div>
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
