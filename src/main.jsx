import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Login,Signup} from "./components/index.js"
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Article from "./pages/Article.jsx";
import Cardc from "./pages/Cardc.jsx";
import We from "./pages/We.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/search/:slug",
          element: (
                  < Search/>
          ),
        },
        {
          path: "/cardc/:slug",
          element: (
                  < Cardc/>
          ),
        },
        {
          path: "/article/:slug",
          element: (
                  < Article/>
          ),
        },
        {
          path: "/we/:slug",
          element: (
                  < We/>
          ),
        },
        
      ],
    },
    {
        path: "/login",
        element: (
                < Login/>
        ),
    },
    {
        path: "/signup",
        element: (
                < Signup/>
        ),
    },
    
    ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
