import { Outlet, Route, Routes } from 'react-router-dom'
import { MainRoutes, SubRoutes } from './routes'
import Home from './pages/Home'
import About from './pages/About'
import { Suspense } from 'react'
import Loader from './modules/common/components/Loader'
import Login from './pages/Login'
import { Toaster } from 'sonner'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Navigation from './modules/common/components/Navigation/index.tsx'


// TODO - Create a loader for APP suspense
function App() {
  function BasicLayout() {
    return (
      <>
        <Navigation />
        <Toaster closeButton={true} richColors={true}/>
        <Outlet />
      </>
    )
  }

  function LoginLayout() {
    return (
      <>
        <Toaster closeButton={true} richColors={true}/>
        <Outlet />
      </>
    )
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
  )
}

export default App
