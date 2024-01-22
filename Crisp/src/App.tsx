import { Outlet, Route, Routes } from "react-router-dom";
import { MainRoutes, SubRoutes } from "./routes";
import Home from "./pages/Home";
import About from "./pages/About";
import { Suspense, useEffect, useState } from "react";
import Loader from "./modules/common/components/Loader";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import BlogPage from "./pages/Blog";
import Navbar from "./modules/common/components/Navbar";
import "./app.scss";
import { Toaster } from "sonner";

// TODO - Create a loader for APP suspense
function App() {
  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    console.log("windowDimensions", windowDimensions);
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function BasicLayout() {
    return (
      <>
        <div className="app" style={{ height: windowDimensions.height, width: windowDimensions.width }}>
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
        <div className="app" style={{ height: windowDimensions.height, width: windowDimensions.width }}>
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
            <Route path={SubRoutes.BLOG} element={<BlogPage />} />
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
