import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './pages/Home'
import About from './pages/About'


// TODO - Create a loader for APP suspense
function App() {

  return (
    <>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
    </Routes>
    </>
  )
}

export default App
