import { Outlet, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './pages/Home'
import About from './pages/About'
import { Suspense } from 'react'
import Loader from './modules/common/components/Loader'
import Login from './pages/Login'
import { Toaster } from 'sonner'
import Navigation from './modules/common/components/navigation'


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
        <Route path={ROUTES.HOME} element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  )
}

export default App
