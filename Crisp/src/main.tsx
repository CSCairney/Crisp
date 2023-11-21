import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "../src/styles/global-styles.scss"
import { Provider } from 'react-redux'
import { store } from "./store.ts"
import Loader from './modules/common/components/Loader/index.tsx'
import Seo from "./modules/common/components/Seo";
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Seo title="Crisp Weather" description="We are a company that produces new ways to check the weather by combining innovative software with a friendly face. Our main product is an app that you can use offline and implements our groundbreaking technology. Our target audience is seniors." name="Github: CSCairney" type="website" />
            <App />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
)
