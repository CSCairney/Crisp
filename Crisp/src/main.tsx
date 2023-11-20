import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "../src/styles/global-styles.scss"
import { Provider } from 'react-redux'
import { store } from "./store.ts"
import Loader from './modules/common/components/Loader/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
