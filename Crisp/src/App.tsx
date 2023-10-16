import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './pages/Home'
import About from './pages/About'
import { Suspense } from 'react'
import Loader from './modules/common/components/Loader'


// TODO - Create a loader for APP suspense
function App() {

  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
    </Suspense>
    </>
  )
}

export default App
